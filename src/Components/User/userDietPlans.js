import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
// import Fade from "@material-ui/core/Fade";
import { Fade } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Cards from "../User/DietCards";
import "./userDietPlans.css";
<<<<<<< HEAD
import bf1 from "../../Images/Foods/Break Fast/1.jpg"
import bf2 from "../../Images/Foods/Break Fast/2.jpg"
import bf3 from "../../Images/Foods/Break Fast/3.jpg"
import bf4 from "../../Images/Foods/Break Fast/4.jpg"
import bf5 from "../../Images/Foods/Break Fast/5.jpg"
import din1 from "../../Images/Foods/Dinner/1.jpg"
import din2 from "../../Images/Foods/Dinner/2.jpg"
import din3 from "../../Images/Foods/Dinner/3.jpg"
import din4 from "../../Images/Foods/Dinner/4.jpg"
import din5 from "../../Images/Foods/Dinner/5.jpg"
import l1 from "../../Images/Foods/Lunch/1.jpg"
import l2 from "../../Images/Foods/Lunch/2.jpg"
import l3 from "../../Images/Foods/Lunch/3.jpg"
import l4 from "../../Images/Foods/Lunch/4.jpg"
import l5 from "../../Images/Foods/Lunch/5.jpg"
import sn1 from "../../Images/Foods/Snacks/1.jpg"
import sn2 from "../../Images/Foods/Snacks/2.jpg"
import sn3 from "../../Images/Foods/Snacks/3.jpg"
import sn4 from "../../Images/Foods/Snacks/4.jpg"
import sn5 from "../../Images/Foods/Snacks/5.jpg"
import sn11 from "../../Images/Foods/Snacks/11.jpg"
import sn12 from "../../Images/Foods/Snacks/12.jpg"
import sn13 from "../../Images/Foods/Snacks/13.jpg"
import sn14 from "../../Images/Foods/Snacks/14.jpg"
import sn15 from "../../Images/Foods/Snacks/15.jpg"
import bannerimg from "../../Images/Chor.jpg";

=======
import abcd from "../../Images/lap-consul/1.JPG"
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
import { useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

// import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import "../../App.css";
import BannerWithText from "../BannerImgComponents/BannerImgComponents";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#EEEEEE",
    // backgroundColor: "#63d471",
    color: "black",
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function CardsMultipleMonday() {
  return (
    <>

      <Cards
<<<<<<< HEAD
        imgs={bf1}
=======
        imgs={abcd}
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
        FoodTime="Break Fast"
        Description="1 cup (80 grams) of oats with 1 cup (240 ml) of dairy or
            plant-based milk, 1 sliced banana, and 2 tablespoons (33 grams)
            of peanut butter "
      />
      <Cards
        imgs={sn1}

        FoodTime="Snacks"
        Description=" trail mix made with 1 cup (80 grams) of dry cereal, 1/4 cup (30
              grams) of granola, 1/4 cup (34 grams) of dried fruit, and 20
              nuts"
      />
      <Cards
        imgs={l1}

        FoodTime="Lunch"
        Description=" 1 cup (100 grams) of spaghetti with 3/4 cups (183 grams) of
              tomato sauce and 4 ounces (112 grams) of cooked ground beef, as
              well as 1 medium breadstick with 1 tablespoon (14 grams) of
              butter"
      />
      <Cards
        imgs={sn11}

        FoodTime="Snacks"
        Description="1 cup (226 grams) of cottage cheese and 1/2 cup (70 grams) of
              blueberries"
      />
      <Cards
        imgs={din1}

        FoodTime="Dinner"
        Description="4 ounces (110 grams) of salmon, 1 cup (100 grams) of brown rice,
              and 5 asparagus spears"
      />
    </>
  );
}
function CardsMultipleTuesday() {
  return (
    <>
      <Cards
        imgs={bf2}
        FoodTime="Break Fast"
        Description="smoothie made with 2 cups (480 ml) of dairy or plant-based milk,
      1 cup (227 grams) of yogurt, 1 cup (140 grams) of blueberries,
      and 2 tablespoons (33 grams) of almond butter"
      />
      <Cards
        imgs={sn2}

        FoodTime="Snacks"
        Description="  1 granola bar, 1 piece of fruit, and 2 pieces of string cheese"
      />
      <Cards
        imgs={l2}

        FoodTime="Lunch"
        Description="  12-inch sub sandwich with meat, cheese, and veggies with 3
      ounces (85 grams) of baby carrots, 2 tablespoons (28 grams) of
      hummus, and apple slices on the side"
      />
      <Cards
        imgs={sn12}

        FoodTime="Snacks"
        Description="1 scoop of whey protein powder mixed in 1 cup (240 ml) of dairy
      or plant-based milk"
      />
      <Cards
        imgs={din2}

        FoodTime="Dinner"
        Description="    4-ounce (113-gram) sirloin steak, 1 medium-sized (173-gram)
      baked potato with 1 tablespoon (14 grams) of butter, and 1 cup
      (85 grams) of broccoli"
      />
    </>
  );
}
function CardsMultipleWednesday() {
  return (
    <>
      <Cards
        imgs={bf3}
        FoodTime="Break Fast"
        Description="3 whole-wheat waffles with 2 tablespoons (33 grams) of peanut
      butter, 1 orange, and 2 cups (480 ml) of dairy or plant-based
      milk "
      />
      <Cards
        imgs={sn3}

        FoodTime="Snacks"
        Description="  1 nut-based granola bar and 1 ounce (28 grams) of almonds"
      />
      <Cards
        imgs={l3}

        FoodTime="Lunch"
        Description="  6-ounce (170-gram) 90%-lean burger on a whole-wheat bun with 1
      tomato slice and lettuce leaf, as well as 1 1/2 cup (86 grams)
      of homemade sweet potato fries cooked in olive oil"
      />
      <Cards
        imgs={sn13}

        FoodTime="Snacks"
        Description="  1 cup (227 grams) of Greek yogurt and 1 cup (140 grams) of
      strawberries"
      />
      <Cards
        imgs={din3}

        FoodTime="Dinner"
        Description=" 4-ounce (112-gram) chicken breast, 1/2 cup (84 grams) of quinoa,
      and 1 1/3 cups (85 grams) of sugar snap peas"
      />
    </>
  );
}
function CardsMultipleThursday() {
  return (
    <>
      <Cards
        imgs={bf4}
      
        FoodTime="Break Fast"
        Description=" 3-egg omelet with sliced onions, red and green bell peppers, and
      1/4 cup (28 grams) of shredded cheese with 2 cups (480 ml) of
      dairy or plant-based milk to drink "
      />
      <Cards
        imgs={sn4}

        FoodTime="Snacks"
        Description="   2 tablespoons (33 grams) of peanut butter and 1 banana on 1
      slice of whole-wheat bread"
      />
      <Cards
        imgs={l4}

        FoodTime="Lunch"
        Description=" 8 ounces (226 grams) of tilapia fillets, 1/4 cup (32 grams) of
      lentils, and a salad topped with 1/4 cup (30 grams) of walnuts"
      />
      <Cards
        imgs={sn14}

        FoodTime="Snacks"
        Description=" 2 sliced, hard-boiled eggs atop a mixed green salad"
      />
      <Cards
        imgs={din4}

        FoodTime="Dinner"
        Description="  turkey chili made with a 4-ounce (114-gram) turkey breast,
      chopped onions, garlic, celery, and sweet peppers, 1/2 cup (123
      grams) of canned, diced tomatoes, and 1/2 cup (120 grams) of
      cannellini beans, topped with 1/4 cup (28 grams) of shredded
      cheese. Add oregano, bay leaves, chili powder, and cumin as
      desired for taste."
      />
    </>
  );
}
function CardsMultipleFriday() {
  return (
    <>
      <Cards
        imgs={bf5}

        FoodTime="Break Fast"
        Description=" 3 whole eggs, 1 apple, and 1 cup (80 grams) of oatmeal made with
      1 cup (240 ml) of dairy or plant-based milk "
      />
      <Cards
        imgs={sn5}

        FoodTime="Snacks"
        Description=" 1 cup (226 grams) of plain yogurt with 1/4 cup (30 grams) of
      granola and 1/2 cup (70 grams) of raspberries"
      />
      <Cards
        imgs={l5}

        FoodTime="Lunch"
        Description="   6-ounce (168-gram) chicken breast, 1 medium-sized (151-gram)
      sweet potato, 3/4 cup (85 grams) of green beans, and 1 ounce (28
      grams) of nuts"
      />
      <Cards
        imgs={sn15}

        FoodTime="Snacks"
        Description="  1/2 cup (130 grams) of chickpeas atop greens"
      />
      <Cards
        imgs={din5}

        FoodTime="Dinner"
        Description=" burrito bowl with 6 ounces (170 grams) of chopped sirloin steak,
      1/2 cup (130 grams) of black beans, 1/2 cup (90 grams) of brown
      rice, 1 cup (35 grams) of shredded lettuce and spinach, and 2
      tablespoons (16 grams) of salsa"
      />
    </>
  );
}

export default function NavTabs() {
  const [show, SetShow] = useState(false);
  const [showt, SetShowt] = useState(false);
  const [showw, SetShoww] = useState(false);
  const [showth, SetShowth] = useState(false);
  const [showf, SetShowf] = useState(false);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const mon = open ? "simple-popper" : undefined;
  const tues = open ? "simple-popper" : undefined;
  const wed = open ? "simple-popper" : undefined;
  const thurs = open ? "simple-popper" : undefined;
  const fri = open ? "simple-popper" : undefined;

  let history = useHistory();
<<<<<<< HEAD
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: 'Diet Plan',
      subDash: '/',
      subLink: '/diets'
    },

  ];
=======

>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#233329",
          color: "white",
        }}
      >
        <BannerWithText 
      imgSrc={bf1}
      heading={"Diet Plan"}
      subHeading={`Gain And Lean`}
      LinksBan={LinksBan}
      height={"400px"}
      backgroundSize={"100% 400px"}
      conmarpad={"mt-5 pt-5"}
      fontsize={"60px"}
      />
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Gain" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Lean" href="/trash" {...a11yProps(1)} />
          {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
      <FaIcons.FaLongArrowAltLeft
            className="iconss"
            color="#233329"
            onClick={() => history.goBack()}
            size="30px"
          >back</FaIcons.FaLongArrowAltLeft>

        <div
          style={{
            // justifyContent:'center',
            // alignItems:'center',
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            textTransform: "capitalize",
            // backgroundColor: "#f5f5f5",
            width: "100%",
            padding: 10,
            fontFamily: "sans-serif",
            color: "#212121",
          }}
        >
          <Marquee className="marquee" speed={100} gradient={false}>
            <p style={{ fontWeight: "bold" }}>
              Men :
              <span style={{ fontWeight: "normal" }}>
                The average, moderately active man between the ages of 26–45
                needs 2,600 calories per day to maintain his weight and 2,100
                calories per day to lose 1 (0.45 kg) pound per week . Young men
                ages 19–25 have higher energy needs. They require an average of
                2,800 calories per day to maintain their weight and up to 3,000
                if they’re active. To lose 1 pound (0.45 kg) per week,
                moderately active young men should consume 2,300–2,500 calories
                daily.
              </span>
            </p>
            <p style={{ fontWeight: "bold" }}>
              Women :
              <span style={{ fontWeight: "normal" }}>
                The average, moderately active woman between the ages of 26–50
                needs to eat about 2,000 calories per day to maintain her weight
                and 1,500 calories per day to lose 1 pound (0.45 kg) of weight
                per week. Young women in their early 20s have higher calorie
                needs. They require about 2,200 calories per day to maintain
                their weight.
              </span>
            </p>
          </Marquee>
          <h2
            className="headingDiet"
            // style={{
            //   color: "#212121",
            //   WebkitBackgroundClip: "text",
            //   fontWeight: "600",
            // }}
          >
            Want to Gain More than 5 KG a Month ?
          </h2>
          <h4
            className="wordingsUserGain"
            style={{
              color: "#121212",
              fontWeight: "normal",
<<<<<<< HEAD
              color: "#212121",
              WebkitBackgroundClip: "text",
              fontFamily: 'serif'
=======
              textAlign: 'center',
              fontFamily:"Dancing Script"
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
            }}
          >
            Follow our diet plan for a month accordingly and gain 2500-3000
            Calories a day!
          </h4>

          <div
            style={{
              padding: 0,
              // backgroundColor:'lightgray'
            }}
          >
            <Button
              variant="outlined"
              style={{
                width: "100%",
                marginTop: 20,
                // backgroundColor:'pink'
              }}
              onClick={() => SetShow(!show)}
            >
              Monday
            </Button>
            <div className="cards">{show ? <CardsMultipleMonday /> : null}</div>

            <Button
              variant="outlined"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={() => SetShowt(!showt)}
            >
              Tuesday
            </Button>
            <div className="cards">
              {showt ? <CardsMultipleTuesday /> : null}
            </div>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={() => SetShoww(!showw)}
            >
              Wednesday
            </Button>
            <div className="cards">
              {showw ? <CardsMultipleWednesday /> : null}
            </div>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={() => SetShowth(!showth)}
            >
              Thursday
            </Button>
            <div className="cards">
              {showth ? <CardsMultipleThursday /> : null}
            </div>
            <Button
              variant="outlined"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={() => SetShowf(!showf)}
            >
              Friday
            </Button>
            <div className="cards">
              {showf ? <CardsMultipleFriday /> : null}
            </div>

            <h3
              style={{
                fontWeight: "bold",
                color: "#121212",
                // backgroundColor: "darkgreen",
                borderRadius: 50,
                textAlign: "center",
                padding: 10,
                opacity: "80%",
              }}
            >
              Foods To Avoid
            </h3>
            <center>
              <ul
                style={{
                  textAlign: "center",
                  listStyle: "none",
                  backgroundColor: "#121212",
                  borderRadius: 50,
                  padding: 10,
                  // paddingLeft:30,
                  opacity: "80%",
                  width: "100%",
                }}
              >
                <li style={{ color: "#63d471" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Fried foods:{" "}
                  </span>
                  <br></br>
                  French fries, onion rings, doughnuts, chicken strips, cheese
                  sticks, etc.{" "}
                </li>
                <li style={{ color: "#63d471" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Fast food:{" "}
                  </span>
                  <br></br>
                  tacos, burgers, pizza, hot dogs, etc.
                </li>
                <li style={{ color: "#63d471" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Sugary foods and drinks:{" "}
                  </span>{" "}
                  <br></br>
                  soda, candy, sports drinks, sugary baked goods, sweetened tea,
                  ice cream, sweet coffee drinks, etc.
                </li>
                <li style={{ color: "#63d471" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Refined carbs:{" "}
                  </span>{" "}
                  <br></br>
                  cookies, chips, sugary cereals, pastries, etc.
                </li>
              </ul>
              <a href="https://www.calculator.net/calorie-calculator.html">
                Count your Calorie{" "}
              </a>
            </center>
          </div>
        </div>
      </TabPanel>



      {/* lean */}



      <TabPanel value={value} index={1}>
        <div
          style={{
            // justifyContent:'center',
            // alignItems:'center',
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            textTransform: "capitalize",
            // backgroundColor: "#f5f5f5",
            width: "100%",
            color: "#121212",
            padding: 20,
            fontFamily: 'Dancing Script',
          }}
        >
          <Marquee className="marquee" speed={100} gradient={false}>
            <p style={{ fontWeight: "Normal" }}>
              When trying to lose weight, a general rule of thumb is to reduce
              your calorie intake to 500 fewer calories than your body needs to
              maintain your current weight. This will help you lose about 1
              pound (0.45 kg) of body weight per week.
            </p>
          </Marquee>
          <h2
            className="headingDiet"
          >
            Want to Lean weight ?
          </h2>
          <h6
            className="wordingsUserGain"
            style={{
              color: "#121212",
              fontWeight: "normal",
              textAlign: 'center'
            }}
          >
            The following evidence-based eating and lifestyle changes have been
            shown to help people lose weight.
          </h6>
          <div className="DietLean mt-3">
            <h3
              className="DietLeanHeading"
            >
              Eat More Protein
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
<<<<<<< HEAD
              <li style={{ fontFamily: 'Dancing Script', textAlign: 'justify' }}>
=======
              <li style={{ fontFamily: 'Roboto', textAlign: 'justify' }}>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                <span style={{ fontFamily: 'Dancing Script', color: "#63d471", fontWeight: "bold" }}>
                  When it comes to losing weight, protein is the king of
                  nutrients{" "}
                </span>
                Eating protein helps you stay fuller longer and may help you
                consume fewer calories throughout the day. One older study
                showed that people who ate 30% of calories from protein ate 441
                fewer calories per day{" "}
              </li>
            </ul>
            <h3
              className="DietLeanHeading"

            >
              Avoid sugary soft drinks and fruit juices
            </h3>
            <ul style={{ fontFamily: 'Dancing Script', textAlign: "left", listStyle: "none" }}>
<<<<<<< HEAD
              <li style={{fontFamily: 'Dancing Script',}}>
=======
              <li style={{fontFamily: 'Roboto',}}>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                <span style={{ fontFamily: 'Dancing Script', color: "#63d471", fontWeight: "bold" }}>
                  {" "}
                  Another relatively easy change you can make is to eliminate
                  liquid sugar calories from your diet.{" "}
                </span>
                Studies have shown that sugary drinks are strongly linked to an
                increased risk of obesity, with one study in children showing a
                60% increased risk for each daily serving of a sugar-sweetened
                beverage
              </li>
            </ul>
            <h3
              className="DietLeanHeading"

            >
              Drink more water
            </h3>
            <ul style={{ fontFamily: 'Dancing Script', textAlign: "left", listStyle: "none" }}>
<<<<<<< HEAD
              <li style={{fontFamily: 'Dancing Script',}} >
=======
              <li style={{fontFamily: 'Roboto',}} >
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                <span style={{ fontFamily: 'Dancing Script', color: "#63d471", fontWeight: "bold" }}>
                  {" "}
                  One very simple trick to increase weight loss is to drink more
                  water{" "}
                </span>
                Studies have suggested drinking water can increase the number of
                calories you burn for up to 90 minutes Drinking about eight,
                8-ounce glasses (2 liters) of water per day may make you burn
                about 96 more calories. In one 12-week study, drinking 17 ounces
                (0.5 liters) of water half an hour before meals made people lose
                44% more weight
              </li>
            </ul>
            <h3
              className="DietLeanHeading"

            >
              Exercise and lift weights
            </h3>
            <ul style={{ fontFamily: 'Dancing Script', textAlign: "left", listStyle: "none" }}>
<<<<<<< HEAD
              <li style={{fontFamily: 'Dancing Script', marginLeft: "" }}>
=======
              <li style={{fontFamily: 'Roboto', marginLeft: "" }}>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                <span style={{ fontFamily: 'Dancing Script', color: "#63d471", fontWeight: "bold" }}>
                  {" "}
                  When you eat fewer calories, your body compensates by saving
                  energy, making you burn fewer calories{" "}
                </span>
                The only proven strategy to prevent this effect is to exert your
                muscles by lifting weights. If you can’t get to a gym, consider
                doing bodyweight exercises, such as pushups, squats, and situps,
                at home. Doing some cardio, including walking, swimming, or
                jogging, can also be important — not necessarily for weight loss
                but for optimal health and general well-being.
              </li>
            </ul>
            <h3
              className="DietLeanHeading"

            >
              Reduce your refined carb intake
            </h3>
            <ul style={{ fontFamily: 'Dancing Script', textAlign: "left", listStyle: "none" }}>
<<<<<<< HEAD
              <li style={{fontFamily: 'Dancing Script', marginLeft: "" }}>
=======
              <li style={{fontFamily: 'Roboto', marginLeft: "" }}>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
                <span style={{ fontFamily: 'Dancing Script', color: "#63d471", fontWeight: "bold" }}>
                  {" "}
                  Cutting carbs is a very effective way to lose weight, as it
                  reduces appetite and makes you eat fewer calories{" "}
                </span>
                Studies have shown that eating a low carb diet until fullness
                can make you lose about two to three times more weight than a
                calorie-restricted, low fat diet. What’s more, low carb diets
                have many other benefits for health, especially for people with
                type 2 diabetes or metabolic syndrome
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
