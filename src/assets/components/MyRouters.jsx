import { Route, Routes } from "react-router-dom";

import ErrorPage from "../tutorial/07Hooks/ErrorPage";

import StateExample from "../../assets/tutorial/01useState/01-example";
import StateArray from "../../assets/tutorial/01useState/02-array";
import StateObject from "../../assets/tutorial/01useState/03-object";
import StateCounter from "../../assets/tutorial/01useState/04-counter";

import EffectBasics from "../../assets/tutorial/02UseEffect/01-basics";
import EffectFetchData from "../../assets/tutorial/02UseEffect/02FetchData";
import EffectFetchLoader from "../../assets/tutorial/02UseEffect/03FetchWithLoader";
import EffectShortCircuit from "../../assets/tutorial/02UseEffect/04ShortCircuit";
import EffectForms from "../../assets/tutorial/02UseEffect/05Forms";

import UseRef from "../../assets/tutorial/03useRef/01UseRef";

import UseReducer from "../../assets/tutorial/04useReducer";

import PropDrilling from "../../assets/tutorial/05PropDrilling/01PropExample";

import ContextAPI from "../../assets/tutorial/06ContextApi";
import CustomHooks from "../tutorial/07Hooks/CustomHooks";

import BirthDayReminders from "../projects/01BirthdayReminders";
import Tours from "../projects/02Tours";
import Reviews from "../projects/03Reviews";
import Accordion from "../projects/04Accordion";
import MenuDisplay from "../projects/05MenuDisplay";
import FetchJobs from "../projects/06FetchJobs";
import Slider from "../projects/07Slider";
import Lorem from "../projects/08Lorem";
import ColorGenerator from "../projects/09ColorGenerator";
import GroceryList from "../projects/10Grocery";
import CustomNavBar from "../projects/11NavBar";
import Sidebar from "../projects/12Sidebar";

import Setup from "../projects/12Sidebar";

const MyRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Setup />} />

      <Route path="/use_state/example" element={<StateExample />} />
      <Route path="/use_state/array" element={<StateArray />} />
      <Route path="/use_state/object" element={<StateObject />} />
      <Route path="/use_state/counter" element={<StateCounter />} />

      <Route path="/use_effect/basics" element={<EffectBasics />} />
      <Route path="/use_effect/fetch_data" element={<EffectFetchData />} />
      <Route
        path="/use_effect/fetch_data/:username"
        element={<EffectFetchLoader />}
      />
      <Route
        path="/use_effect/fetch_with_loader"
        element={<EffectFetchLoader />}
      />
      <Route
        path="/use_effect/short_circuit"
        element={<EffectShortCircuit />}
      />
      <Route path="/use_effect/forms" element={<EffectForms />} />

      <Route path="/use_ref" element={<UseRef />} />

      <Route path="/use_reducer" element={<UseReducer />} />

      <Route path="/prop_drilling" element={<PropDrilling />} />

      <Route path="/context_api" element={<ContextAPI />} />

      <Route path="/custom_hooks" element={<CustomHooks />} />

      <Route
        path="/projects/birthday_reminders"
        element={<BirthDayReminders />}
      />

      <Route path="/projects/tours" element={<Tours />} />
      <Route path="/projects/reviews" element={<Reviews />} />
      <Route path="/projects/accordion" element={<Accordion />} />
      <Route path="/projects/menu_display" element={<MenuDisplay />} />
      <Route path="/projects/fetch_jobs" element={<FetchJobs />} />
      <Route path="/projects/slider" element={<Slider />} />
      <Route path="/projects/lorem_generator" element={<Lorem />} />
      <Route path="/projects/color_generator" element={<ColorGenerator />} />
      <Route path="/projects/grocery_list" element={<GroceryList />} />
      <Route path="/projects/custom_navbar" element={<CustomNavBar />} />
      <Route path="/projects/sidebar" element={<Sidebar />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MyRouters;
