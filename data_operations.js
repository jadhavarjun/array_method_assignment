const users = [
  { name: "Aarav", age: 28, gender: "Male", location: "Mumbai" },
  { name: "Bhavya", age: 35, gender: "Female", location: "Delhi" },
  { name: "Chirag", age: 22, gender: "Male", location: "Bangalore" },
  { name: "Deepika", age: 17, gender: "Female", location: "Chennai" },
  { name: "Eshaan", age: 30, gender: "Male", location: "Hyderabad" },
  { name: "Farah", age: 31, gender: "Female", location: "Kolkata" },
  { name: "Ganesh", age: 26, gender: "Male", location: "Ahmedabad" },
  { name: "Hina", age: 29, gender: "Female", location: "Pune" },
  { name: "Ishaan", age: 33, gender: "Male", location: "Jaipur" },
  { name: "Jyoti", age: 24, gender: "Female", location: "Lucknow" },
  { name: "Kunal", age: 37, gender: "Male", location: "Chandigarh" },
  { name: "Leela", age: 30, gender: "Female", location: "Bhopal" },
  { name: "Manish", age: 32, gender: "Male", location: "Indore" },
  { name: "Neha", age: 23, gender: "Female", location: "Kochi" },
  { name: "Omkar", age: 16, gender: "Male", location: "Jaipur" },
];

const isAdult = users.map((user) => {
  return user.age >= 18;
});

const adultUsers = users.filter((adult) => adult.age >= 18);

const getFullName = users.map((fullName) => {
  return fullName.name + " " + fullName.location;
});

// part 2
const filterByGender = users.map((userGender) => {
  if (userGender.gender == "Male") {
    return true;
  } else {
    return false;
  }
});

// chainning
const femaleUsers = users
  .filter((findingFemales) => {
    return findingFemales.gender == "Male";
  })
  .map((findName) => {
    return findName.name;
  });

// part 3
const movies = [
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Action",
    year: 1994,
    rating: 8.9,
  },
  {
    title: "Forrest Gump",
    genre: "Comedy",
    year: 1994,
    rating: 8.8,
  },
  {
    title: "Inception",
    genre: "Action",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    genre: "Action",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Fight Club",
    genre: "Action",
    year: 1999,
    rating: 8.8,
  },
  {
    title: "Superbad",
    genre: "Comedy",
    year: 2007,
    rating: 7.6,
  },
  {
    title: "Anchorman: The Legend of Ron Burgundy",
    genre: "Comedy",
    year: 2004,
    rating: 7.2,
  },
  {
    title: "Deadpool",
    genre: "Action",
    year: 2016,
    rating: 8.0,
  },
  {
    title: "The Hangover",
    genre: "Comedy",
    year: 2009,
    rating: 7.7,
  },
];
// part 4
const filterByGenre = movies.map((movie) => {
  if (movie.genre === "Action") {
    return true;
  } else {
    return false;
  }
});
const actionMovies = movies
  .filter((actionGerne) => {
    return actionGerne.genre == "Action";
  })
  .map((movieTitle) => {
    return movieTitle.title;
  });
// final
const combinedResults = [...getFullName, ...femaleUsers, ...actionMovies];
console.log(combinedResults);
