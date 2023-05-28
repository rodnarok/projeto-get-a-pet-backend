const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json()); // não precisa do urlencoded pq iremos nos comunicar com json mesmo

// Solve CORS // com isso podemos usar o front e o back q estarão usando o mesmo ip
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // libera o locahost:3000 para ser usando em outro app

// Public folder for images
app.use(express.static("public"));

// Routes
const UserRoutes = require("./routes/UserRoutes");
const PetRoutes = require("./routes/PetRoutes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(5000); // 5000 pq o front estará usando a 3000
