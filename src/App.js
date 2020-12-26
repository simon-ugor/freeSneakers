// importing components
import Header from "./components/Header.js"
import Bottom from "./components/Bottom.js"
import Homepage from "./components/Homepage.js"
import PrivacyPolicy from "./components/PrivacyPolicy.js"
import TermsConditions from "./components/TermsConditions.js"
import Blog from "./components/Blog.js"
import AboutUs from "./components/AboutUs.js"
import ContactUs from "./components/ContactUs.js"
// importing blog posts
import SneakerTrendPredictions from "./components/Blogposts/SneakerTrendPredictions.js"
import DesignersToWatch from "./components/Blogposts/DesignersToWatch.js"
import MostValuableSneaker from "./components/Blogposts/MostValuableSneaker.js"
import BestNikeDunk from "./components/Blogposts/BestNikeDunk.js"
import SneakerBrands from "./components/Blogposts/SneakerBrands.js"
import NewBalance from "./components/Blogposts/NewBalance.js"
import MaterialMatters from "./components/Blogposts/MaterialMatters.js"
import ColorwayCorral from "./components/Blogposts/ColorwayCorral.js"
import JerryLorenzo from "./components/Blogposts/JerryLorenzo.js"
import PumaSuede from "./components/Blogposts/PumaSuede.js"
// importing React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/termsandconditions" component={TermsConditions} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />

          <Route exact path="/2021SneakerTrendPredictions" component={SneakerTrendPredictions} />
          <Route exact path="/2021DesignersToWatch" component={DesignersToWatch} />
          <Route exact path="/mostValuableSneaker" component={MostValuableSneaker} />
          <Route exact path="/bestNikeDunk" component={BestNikeDunk} />
          <Route exact path="/sneakerBrands" component={SneakerBrands} />
          <Route exact path="/newBalance" component={NewBalance} />
          <Route exact path="/materialMatters" component={MaterialMatters} />
          <Route exact path="/colorwayCorral" component={ColorwayCorral} />
          <Route exact path="/jerryLorenzo" component={JerryLorenzo} />
          <Route exact path="/pumaSuede" component={PumaSuede} />
        </Switch>
        <Bottom /> 
      </Router>
      <div className="background-div"></div>
    </div>
  );
}

export default App;
