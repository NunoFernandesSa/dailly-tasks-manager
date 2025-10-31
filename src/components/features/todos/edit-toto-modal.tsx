import { useTodoStore } from "@/src/store/todoStore";
import React from "react";
import {
  Button,
  Keyboard,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EditTodoModal() {
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

  const handleSave = async () => {
    const todo = todos.find((t) => t.id === editingId);
    if (todo) {
      await updateTodo(todo.id, { ...todo, text: editingText });
      setEditModalVisible(false);
      setEditingId(null);
      setEditingText("");
    }
  };

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
            <TextInput
              value={editingText}
              onChangeText={setEditingText}
              placeholder="Edit your todo"
              style={styles.input}
            />
            <View style={styles.buttonRow}>
              <Button title="Save" onPress={handleSave} />
              <Button title="Cancel" onPress={handleCancel} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
