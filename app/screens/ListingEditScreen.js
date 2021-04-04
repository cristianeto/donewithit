import React from "react";
import Screen from "../components/Screen";
import { Text, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms/";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image!"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "#45aaa4", icon: "book" },
  { label: "Others", value: 9, backgroundColor: "#c2d2d2", icon: "basketball" },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={() => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLenght={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
