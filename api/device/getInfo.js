const express = require("express");

const getInfo = async (req, res) => {
  try {
    console.log("hello");
    res.send("getInfo called");
  } catch (error) {
    console.log(error);
  }
};

module.exports = getInfo;
