import React from "react";
import Button from "./Button";

// const list = ["All", "Live", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Cricket", "valentines", "Soccer", "Cricket", "Cooking", "Cricket", "valentines","Soccer", "Cricket", "Cooking", "Cricket", "valentines"]

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name = "Gaming"/>
      <Button name = "Songs"/>
      <Button name = "Live"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Cooking"/>
      <Button name = "Cricket"/>
      <Button name = "Valentines"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Cooking"/>
      <Button name = "Cricket"/>
      <Button name = "Valentines"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Cooking"/>
      <Button name = "Cricket"/>
      <Button name = "Valentines"/>
    </div>
  );
};

export default ButtonList;
