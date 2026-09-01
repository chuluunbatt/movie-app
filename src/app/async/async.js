// Promise

const fetchUserData = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((responsive) => responsive.json())
    .then((Data) => console.log(Data))
    .chatch((error) => console.error(" Something went wrong:", error));

};
//Async
const fetchUserDataAsync = async => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(" Something went wrong:", error);
  }

};                    