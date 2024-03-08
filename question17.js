// Write a function that finds the longest word in a sentence
abc = "Write a function that finds the longest word in a sentence";

list_data = abc.split(" ");
max = "";
for (let i = 0; i < list_data.length; i++) {

    max = list_data[i].length > max.length ? list_data[i] : max
}
console.log("longest word is", max);