const express = require('express');
const statFunc = require("./statFunc");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/mean', function(req, res) {
  console.log(req.query);
  const {nums} = req.query;
  console.log("Variable nums: ", nums);
  if(nums === null || nums === undefined || nums === '')
  {
    errors= "nums are required"
    return res.status(404).json({response:{errors}});
  }
  const numsArray = nums.split(",");
  const NonNumbers = filterNonNumbers(numsArray);
  console.log("non numbers: ", NonNumbers);
   
  if(NonNumbers.length>0)
  {
    errors= addTextToArrayElements(NonNumbers, "is not a number, ")
    return res.status(404).json({response:{errors}});
  }
  const meanValue  = statFunc.mean(numsArray);
  return res.json( {response: {operation: "mean", value: meanValue}});
})


function filterNonNumbers(arr) {
  return arr.filter(element => isNaN(parseFloat(element)) );
}

function addTextToArrayElements(arr, textToAdd) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result +=  arr[i]+ " " + textToAdd; 
  }
  return result.slice(0,-2);
}


app.get('/median', function(req, res) {
  console.log(req.query);
  const {nums} = req.query;
  console.log("Variable nums: ", nums);
  if(nums === null || nums === undefined || nums === '')
  {
    errors= "nums are required"
    return res.status(404).json({response:{errors}});
  }
  const numsArray = nums.split(",");
  const NonNumbers = filterNonNumbers(numsArray);
  console.log("non numbers: ", NonNumbers);
   
  if(NonNumbers.length>0)
  {
    errors= addTextToArrayElements(NonNumbers, "is not a number, ")
    return res.status(404).json({response:{errors}});
  }
  const medianResult = statFunc.median(numsArray);
  console.log("Median: ",medianResult);
  return res.json( {response: {operation: "median", value: medianResult}});
})

app.get('/mode', function(req, res) {
  console.log(req.query);
  const {nums} = req.query;
  console.log("Variable nums: ", nums);
  if(nums === null || nums === undefined || nums === '')
  {
    errors= "nums are required"
    return res.status(404).json({response:{errors}});
  }
  const numsArray = nums.split(",");
  const NonNumbers = filterNonNumbers(numsArray);
  console.log("non numbers: ", NonNumbers);
   
  if(NonNumbers.length>0)
  {
    errors= addTextToArrayElements(NonNumbers, "is not a number, ")
    return res.status(404).json({response:{errors}});
  }
  const modeResult = statFunc.mode(numsArray);
  console.log("the mode is: ",modeResult);
  return res.json( {response: {operation: "Mode", value: modeResult}});
})



