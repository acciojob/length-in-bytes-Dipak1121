const byteSize = (str) => {
  // write your code here
	 let encoder = new TextEncoder();
    let encodedString = encoder.encode(str);
    let sizeInBytes = encodedString.length;
    return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
