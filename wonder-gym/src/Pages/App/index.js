import { BrowserRouter, Route, Routes } from "react-router-dom";

import '../../App.css';

import PrivateRoute from "../../components/PrivateRoute";
import Home from "../Home";
import Register from "../Register";
import TrainerMainPage from "../Trainer/TrainerMainPage";
import TrainerUsers from "../Trainer/TrainerUsers";
import UserRoutine from "../Trainer/UserRoutine";
import SelectExercises from "../Trainer/Exercises";
import User from "../User";
import Error from "../Error"

import { ROLES } from "../../utils/constants";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route element={<PrivateRoute allowedRoles={[ROLES.TRAINER]} />}>
            <Route path="mainTrainer" element={<TrainerMainPage />} />
            <Route path="mainTrainer/trainerUsers"  element={<TrainerUsers />} />
            <Route path="mainTrainer/trainerUsers/:userId"  element={<UserRoutine/>} />
            <Route path="mainTrainer/trainerUsers/:userId/assignExercise"  element={<SelectExercises/>} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={[ROLES.CLIENT]} />}>
            <Route path="user" element={<User />} />
          </Route>
      
          <Route path="/no-autorizado" element={<Error  errorCode="401" errorName="No Autorizado"/>} />
          <Route path="*" element={<Error errorCode="404" errorName="Not Found" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
