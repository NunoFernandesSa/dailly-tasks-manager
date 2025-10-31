import { modalStyles } from "@/src/assets/styles/modal-style";
import useTheme from "@/src/hooks/useTheme";
import { useTodoStore } from "@/src/store/todoStore";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Keyboard,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EditTodoModal() {
  const { colors } = useTheme();
  const styles = modalStyles(colors);

  const {
    isEditModalVisible,
    setEditModalVisible,
    editingId,
    editingText,
    setEditingText,
    todos,
    updateTodo,
    setEditingId,
  } = useTodoStore();

  // Function to handle saving the edited todo
  /**
   * Persists the edited todo text and closes the modal.
   * Inside: finds the matching todo, updates it, then resets editing state.
   */
  const handleSave = async () => {
    const todo = todos.find((t) => t.id === editingId);
    if (todo) {
      await updateTodo(todo.id, { ...todo, text: editingText });
      setEditModalVisible(false);
      setEditingId(null);
      setEditingText("");
    }
  };

  // Function to handle canceling the edit
  /**
   * Closes the modal and resets editing state.
   */
  const handleCancel = () => {
    setEditModalVisible(false);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <Modal visible={isEditModalVisible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.inputSection}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  inputMode="text"
                  placeholder="Add a new task"
                  placeholderTextColor={colors.textMuted}
                  value={editingText}
                  onChangeText={setEditingText}
                  onSubmitEditing={handleSave}
                  multiline={true}
                  numberOfLines={3}
                />
              </View>

              <View style={styles.buttonRow}>
                {/* save button */}
                <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
                  <LinearGradient
                    colors={colors.gradients.success}
                    style={styles.addButton}
                  >
                    <Ionicons name="add" size={24} color={colors.text} />
                  </LinearGradient>
                </TouchableOpacity>

                {/* cancel button */}
                <TouchableOpacity onPress={handleCancel} activeOpacity={0.8}>
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={styles.addButton}
                  >
                    <Ionicons name="add" size={24} color={colors.text} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
