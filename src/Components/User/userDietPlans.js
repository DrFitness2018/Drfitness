import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Marquee from "react-fast-marquee";

// import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import "../../App.css";

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
    backgroundColor: theme.palette.background.paper,
    color: "black",
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
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
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#121212",
          color: "white",
        }}
      >
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
        <div
          style={{
            // justifyContent:'center',
            // alignItems:'center',
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            textTransform: "capitalize",
            backgroundColor: "#f5f5f5",
            width: "100%",
            padding: 20,
            fontFamily: "sans-serif",
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
            className="HeadingUserGain"
            style={{
              // color:'pink
              background: "-webkit-linear-gradient(#000000, #166d3b)",
              WebkitBackgroundClip: "text",
              fontWeight: "600",
              WebkitTextFillColor: "transparent",
              // color: "linear-gradient(147deg, #166d3b 0%, #000000 54%)",
              // backgroundImage: "linear-gradient(147deg, #166d3b 0%, #000000 74%)"
            }}
          >
            Want to Gain More than 5 KG a Month ?
          </h2>
          <h4
            className="wordingsUserGain"
            style={{
              fontWeight: "normal",
              background: "-webkit-linear-gradient(#000000, #166d3b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Follow our diet plan for a month accordingly and gain 3000 Calories
            a day!
          </h4>
          {/* <ol>
            <li>
              <h4> lean proteins, such as chicken and fish </h4>
            </li>
            <li>
              <h4>red meat with no growth hormones, such as grass-fed beef</h4>
            </li>
            <li>
              <h4>
                full-fat dairy, such as whole milk and full-fat Greek yogurt
              </h4>
            </li>
            <li>
              <h4>eggs</h4>
            </li>
            <li>
              <h4>fat-rich fruits, such as avocados</h4>
            </li>
            <li>
              <h4>nuts, such as almonds</h4>
            </li>
            <li>
              <h4>whole-grain breads</h4>
            </li>
          </ol> */}
          {/* <h3 style={{ fontWeight: "bold", color: "darkgreen" }}>Monday</h3>
          <ul style={{ textAlign: "left" }}>
            <li>
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Breakfast:{" "}
              </span>
              1 cup (80 grams) of oats with 1 cup (240 ml) of dairy or
              plant-based milk, 1 sliced banana, and 2 tablespoons (33 grams) of
              peanut butter{" "}
            </li>
            <li>
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Snack:{" "}
              </span>
              trail mix made with 1 cup (80 grams) of dry cereal, 1/4 cup (30
              grams) of granola, 1/4 cup (34 grams) of dried fruit, and 20 nuts
            </li>
            <li>
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Lunch:{" "}
              </span>{" "}
              1 cup (100 grams) of spaghetti with 3/4 cups (183 grams) of tomato
              sauce and 4 ounces (112 grams) of cooked ground beef, as well as 1
              medium breadstick with 1 tablespoon (14 grams) of butter
            </li>
            <li>
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Snack:{" "}
              </span>{" "}
              1 cup (226 grams) of cottage cheese and 1/2 cup (70 grams) of
              blueberries
            </li>
            <li>
              <span style={{ color: "green", fontWeight: "bold" }}>
                {" "}
                Dinner:{" "}
              </span>{" "}
              4 ounces (110 grams) of salmon, 1 cup (100 grams) of brown rice,
              and 5 asparagus spears
            </li>
          </ul> */}
          <div>
            <h3 className="monday">Monday</h3>
            <ul style={{ textAlign: "left" }}>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Breakfast:{" "}
                </span>
                1 cup (80 grams) of oats with 1 cup (240 ml) of dairy or
                plant-based milk, 1 sliced banana, and 2 tablespoons (33 grams)
                of peanut butter{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>
                trail mix made with 1 cup (80 grams) of dry cereal, 1/4 cup (30
                grams) of granola, 1/4 cup (34 grams) of dried fruit, and 20
                nuts
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Lunch:{" "}
                </span>{" "}
                1 cup (100 grams) of spaghetti with 3/4 cups (183 grams) of
                tomato sauce and 4 ounces (112 grams) of cooked ground beef, as
                well as 1 medium breadstick with 1 tablespoon (14 grams) of
                butter
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>{" "}
                1 cup (226 grams) of cottage cheese and 1/2 cup (70 grams) of
                blueberries
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Dinner:{" "}
                </span>{" "}
                4 ounces (110 grams) of salmon, 1 cup (100 grams) of brown rice,
                and 5 asparagus spears
              </li>
            </ul>
            <h3
              style={{
                // fontWeight: "bold",
                color: "white",
                // backgroundColor: "darkgreen",
                borderRadius: 50,
                // textAlign: "center",
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                // opacity: "80%",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Tuesday
            </h3>
            <ul style={{ textAlign: "justify" }}>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Breakfast:{" "}
                </span>
                smoothie made with 2 cups (480 ml) of dairy or plant-based milk,
                1 cup (227 grams) of yogurt, 1 cup (140 grams) of blueberries,
                and 2 tablespoons (33 grams) of almond butter
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>
                1 granola bar, 1 piece of fruit, and 2 pieces of string cheese
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Lunch:{" "}
                </span>{" "}
                12-inch sub sandwich with meat, cheese, and veggies with 3
                ounces (85 grams) of baby carrots, 2 tablespoons (28 grams) of
                hummus, and apple slices on the side
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>{" "}
                1 scoop of whey protein powder mixed in 1 cup (240 ml) of dairy
                or plant-based milk
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Dinner:{" "}
                </span>{" "}
                4-ounce (113-gram) sirloin steak, 1 medium-sized (173-gram)
                baked potato with 1 tablespoon (14 grams) of butter, and 1 cup
                (85 grams) of broccoli
              </li>
            </ul>
            <h3
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "darkgreen",
                borderRadius: 50,
                textAlign: "center",
                padding: 10,
                opacity: "80%",
              }}
            >
              Wednesday
            </h3>

            <ul style={{ textAlign: "justify" }}>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Breakfast:{" "}
                </span>
                3 whole-wheat waffles with 2 tablespoons (33 grams) of peanut
                butter, 1 orange, and 2 cups (480 ml) of dairy or plant-based
                milk{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>
                1 nut-based granola bar and 1 ounce (28 grams) of almonds
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Lunch:{" "}
                </span>{" "}
                6-ounce (170-gram) 90%-lean burger on a whole-wheat bun with 1
                tomato slice and lettuce leaf, as well as 1 1/2 cup (86 grams)
                of homemade sweet potato fries cooked in olive oil
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>{" "}
                1 cup (227 grams) of Greek yogurt and 1 cup (140 grams) of
                strawberries
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Dinner:{" "}
                </span>{" "}
                4-ounce (112-gram) chicken breast, 1/2 cup (84 grams) of quinoa,
                and 1 1/3 cups (85 grams) of sugar snap peas{" "}
              </li>
            </ul>

            <h3
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "darkgreen",
                borderRadius: 50,
                textAlign: "center",
                padding: 10,
                opacity: "80%",
              }}
            >
              Thursday
            </h3>

            <ul style={{ textAlign: "justify" }}>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Breakfast:{" "}
                </span>
                3-egg omelet with sliced onions, red and green bell peppers, and
                1/4 cup (28 grams) of shredded cheese with 2 cups (480 ml) of
                dairy or plant-based milk to drink{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>
                2 tablespoons (33 grams) of peanut butter and 1 banana on 1
                slice of whole-wheat bread{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Lunch:{" "}
                </span>{" "}
                8 ounces (226 grams) of tilapia fillets, 1/4 cup (32 grams) of
                lentils, and a salad topped with 1/4 cup (30 grams) of walnuts{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>{" "}
                2 sliced, hard-boiled eggs atop a mixed green salad{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Dinner:{" "}
                </span>{" "}
                turkey chili made with a 4-ounce (114-gram) turkey breast,
                chopped onions, garlic, celery, and sweet peppers, 1/2 cup (123
                grams) of canned, diced tomatoes, and 1/2 cup (120 grams) of
                cannellini beans, topped with 1/4 cup (28 grams) of shredded
                cheese. Add oregano, bay leaves, chili powder, and cumin as
                desired for taste.{" "}
              </li>
            </ul>

            <h3
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "darkgreen",
                borderRadius: 50,
                textAlign: "center",
                padding: 10,
                opacity: "80%",
              }}
            >
              Friday
            </h3>

            <ul style={{ textAlign: "justify" }}>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Breakfast:{" "}
                </span>
                3 whole eggs, 1 apple, and 1 cup (80 grams) of oatmeal made with
                1 cup (240 ml) of dairy or plant-based milk{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>
                1 cup (226 grams) of plain yogurt with 1/4 cup (30 grams) of
                granola and 1/2 cup (70 grams) of raspberries{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Lunch:{" "}
                </span>{" "}
                6-ounce (168-gram) chicken breast, 1 medium-sized (151-gram)
                sweet potato, 3/4 cup (85 grams) of green beans, and 1 ounce (28
                grams) of nuts{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Snack:{" "}
                </span>{" "}
                1/2 cup (130 grams) of chickpeas atop greens{" "}
              </li>
              <li>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Dinner:{" "}
                </span>{" "}
                burrito bowl with 6 ounces (170 grams) of chopped sirloin steak,
                1/2 cup (130 grams) of black beans, 1/2 cup (90 grams) of brown
                rice, 1 cup (35 grams) of shredded lettuce and spinach, and 2
                tablespoons (16 grams) of salsa{" "}
              </li>
            </ul>

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
                  width: "50%",
                }}
              >
                <li style={{ color: "green" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Fried foods:{" "}
                  </span>
                  <br></br>
                  French fries, onion rings, doughnuts, chicken strips, cheese
                  sticks, etc.{" "}
                </li>
                <li style={{ color: "green" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Fast food:{" "}
                  </span>
                  <br></br>
                  tacos, burgers, pizza, hot dogs, etc.
                </li>
                <li style={{ color: "green" }}>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {" "}
                    Sugary foods and drinks:{" "}
                  </span>{" "}
                  <br></br>
                  soda, candy, sports drinks, sugary baked goods, sweetened tea,
                  ice cream, sweet coffee drinks, etc.
                </li>
                <li style={{ color: "green" }}>
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

            {/* <div id="TOC_TITLE_2" className="content_body"><div><section className="css-1nbsfox"><header className="css-cguqip"><h3 className="css-1bvkoki">Calorie Counter</h3></header><div className="css-ehx8xi"><form className="css-8g86ek"><div data-testid="units-row" className="css-17g9b7c"><label className="css-35ezg3">Units:</label><div><label className="css-1gy2u7f"><input type="radio" name="selectedUnitType" className="css-1f13l4q" defaultValue="imperial" defaultChecked />U.S. (Imperial)</label><label className="css-1gy2u7f"><input type="radio" name="selectedUnitType" className="css-1f13l4q" defaultValue="metric" />Metric</label></div></div><div data-testid="gender-row" className="css-17g9b7c"><label htmlFor="gender" className="css-35ezg3">Gender:</label><div className="css-v98mpv"><select name="gender" className="css-63c7xx"><option value="-" disabled>Select</option><option value="f">Female</option><option value="m">Male</option></select></div></div><div data-testid="age-row" className="css-17g9b7c"><label htmlFor="age" className="css-35ezg3">Age:</label><div className="css-xmmb76"><div className="css-1rr4qq7"><div className="css-t515a2">Years</div><input type="number" step={1} inputMode="numeric" min={0} name="age" max={125} className="css-12ffvwx" /></div></div></div><div data-testid="height-row" className="css-17g9b7c"><label htmlFor="heightCm" className="css-35ezg3">Height:</label><div className="css-xmmb76"><div className="css-1rr4qq7"><div className="css-t515a2">Centimeters</div><input type="number" step={1} inputMode="numeric" min={0} name="heightCm" className="css-12ffvwx" /></div></div></div><div data-testid="weight-row" className="css-17g9b7c"><label htmlFor="weightKg" className="css-35ezg3">Weight:</label><div className="css-xmmb76"><div className="css-1rr4qq7"><div className="css-t515a2">Kilograms</div><input type="number" step={1} inputMode="numeric" min={0} name="weightKg" className="css-12ffvwx" /></div></div></div><div data-testid="activityLevel-row" className="css-17g9b7c"><label htmlFor="activityLevel" className="css-35ezg3">Activity:</label><div className="css-v98mpv"><select name="activityLevel" className="css-63c7xx"><option value="-" disabled>Select</option><option value="sedentary">Sedentary lifestyle</option><option value="slightly_active">Slightly active</option><option value="moderately_active">Moderately active</option><option value="active">Active lifestyle</option><option value="very_active">Very active lifestyle</option></select></div></div><div className="css-1sa9xhh"><button className="css-bio8i4" type="submit"><span className="css-14ktbsh"><span className="css-1huyk6v">CALCULATE</span></span></button></div></form><div className="css-b0kjd9"><h3 className="css-1tft6i1">Estimated daily calories</h3><p>While this calculator provides an estimated caloric intake based on a number of factors, your nutritional needs may vary. Speak with a nutritionist or healthcare provider before you restrict your intake to ensure you’re choosing a diet that’s right for you.</p><div className="css-12v46xt"><div data-testid="maintain-weight-cell" className="css-1evws86"><div className="label">To maintain weight</div><div data-testid="cell-value" className="css-13nt69o">2145</div></div><div data-testid="lose-weight-cell" className="css-1evws86"><div className="label">To lose weight</div><div data-testid="cell-value" className="css-13nt69o">1716</div></div><div data-testid="lose-weight-fast-cell" className="css-1evws86"><div className="label">To lose weight fast</div><div data-testid="cell-value" className="css-13nt69o">1287</div></div></div></div><div className="css-8sow18">This calculator is for informational purposes only, you should consult a healthcare provider before making any health decisions. The calculator is based on the Mifflin-St. Jeor equation, a formula that has been shown to be an accurate way of estimating calorie needs in <a className="css-5r4717" target="_blank" rel="noopener noreferrer" href="https://www.ncbi.nlm.nih.gov/pubmed/15883556">numerous studies</a>.</div></div></section></div><p /></div> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection:'column',
                justifyContent:'center',
                // alignItems:'center'
              }}
            >
              <Button
                variant="outlined"
                color="#fefefe"
                style={{ backgroundColor: "darkgreen",color:'white', borderColor: "darkgreen" ,padding:'10px',margin:'20px'}}
                aria-describedby={mon}
                type="button"
                onClick={handleClick}
              >
                Monday
              </Button>
              <Button
                variant="outlined"
                color="#fefefe"
                style={{ backgroundColor: "darkgreen",color:'white', borderColor: "darkgreen",padding:'10px',margin:'20px' }}
                aria-describedby={tues}
                type="button"
                onClick={handleClick}
              >
                Tuesday
              </Button>
              <Button
                variant="outlined"
                color="#fefefe"
                style={{ backgroundColor: "darkgreen",color:'white', borderColor: "darkgreen" ,padding:'10px',margin:'20px'}}
                aria-describedby={wed}
                type="button"
                onClick={handleClick}
              >
                Wednesday
              </Button>
              <Button
                variant="outlined"
                color="#fefefe"
                style={{ backgroundColor: "darkgreen",color:'white', borderColor: "darkgreen",padding:'10px',margin:'20px' }}
                aria-describedby={thurs}
                type="button"
                onClick={handleClick}
              >
                Thursday
              </Button>
              <Button
                variant="outlined"
                color="#fefefe"
                style={{ backgroundColor: "darkgreen",color:'white', borderColor: "darkgreen",padding:'10px',margin:'20px' }}
                aria-describedby={fri}
                type="button"
                onClick={handleClick}
              >
                Friday
              </Button>
              <Popper id={mon} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={classes.paper}>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Breakfast:{" "}
                          </span>
                          1 cup (80 grams) of oats with 1 cup (240 ml) of dairy
                          or plant-based milk, 1 sliced banana, and 2
                          tablespoons (33 grams) of peanut butter{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>
                          trail mix made with 1 cup (80 grams) of dry cereal,
                          1/4 cup (30 grams) of granola, 1/4 cup (34 grams) of
                          dried fruit, and 20 nuts
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Lunch:{" "}
                          </span>{" "}
                          1 cup (100 grams) of spaghetti with 3/4 cups (183
                          grams) of tomato sauce and 4 ounces (112 grams) of
                          cooked ground beef, as well as 1 medium breadstick
                          with 1 tablespoon (14 grams) of butter
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>{" "}
                          1 cup (226 grams) of cottage cheese and 1/2 cup (70
                          grams) of blueberries
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Dinner:{" "}
                          </span>{" "}
                          4 ounces (110 grams) of salmon, 1 cup (100 grams) of
                          brown rice, and 5 asparagus spears
                        </li>
                      </ul>
                    </div>
                  </Fade>
                )}
              </Popper>
              <Popper id={tues} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={classes.paper}>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Breakfast:{" "}
                          </span>
                          smoothie made with 2 cups (480 ml) of dairy or
                          plant-based milk, 1 cup (227 grams) of yogurt, 1 cup
                          (140 grams) of blueberries, and 2 tablespoons (33
                          grams) of almond butter
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>
                          1 granola bar, 1 piece of fruit, and 2 pieces of
                          string cheese
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Lunch:{" "}
                          </span>{" "}
                          12-inch sub sandwich with meat, cheese, and veggies
                          with 3 ounces (85 grams) of baby carrots, 2
                          tablespoons (28 grams) of hummus, and apple slices on
                          the side
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>{" "}
                          1 scoop of whey protein powder mixed in 1 cup (240 ml)
                          of dairy or plant-based milk
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Dinner:{" "}
                          </span>{" "}
                          4-ounce (113-gram) sirloin steak, 1 medium-sized
                          (173-gram) baked potato with 1 tablespoon (14 grams)
                          of butter, and 1 cup (85 grams) of broccoli
                        </li>
                      </ul>
                    </div>
                  </Fade>
                )}
              </Popper>
              <Popper id={wed} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={classes.paper}>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Breakfast:{" "}
                          </span>
                          3 whole-wheat waffles with 2 tablespoons (33 grams) of
                          peanut butter, 1 orange, and 2 cups (480 ml) of dairy
                          or plant-based milk{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>
                          1 nut-based granola bar and 1 ounce (28 grams) of
                          almonds
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Lunch:{" "}
                          </span>{" "}
                          6-ounce (170-gram) 90%-lean burger on a whole-wheat
                          bun with 1 tomato slice and lettuce leaf, as well as 1
                          1/2 cup (86 grams) of homemade sweet potato fries
                          cooked in olive oil
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>{" "}
                          1 cup (227 grams) of Greek yogurt and 1 cup (140
                          grams) of strawberries
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Dinner:{" "}
                          </span>{" "}
                          4-ounce (112-gram) chicken breast, 1/2 cup (84 grams)
                          of quinoa, and 1 1/3 cups (85 grams) of sugar snap
                          peas{" "}
                        </li>
                      </ul>
                    </div>
                  </Fade>
                )}
              </Popper>
              <Popper id={thurs} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={classes.paper}>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Breakfast:{" "}
                          </span>
                          3-egg omelet with sliced onions, red and green bell
                          peppers, and 1/4 cup (28 grams) of shredded cheese
                          with 2 cups (480 ml) of dairy or plant-based milk to
                          drink{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>
                          2 tablespoons (33 grams) of peanut butter and 1 banana
                          on 1 slice of whole-wheat bread{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Lunch:{" "}
                          </span>{" "}
                          8 ounces (226 grams) of tilapia fillets, 1/4 cup (32
                          grams) of lentils, and a salad topped with 1/4 cup (30
                          grams) of walnuts{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>{" "}
                          2 sliced, hard-boiled eggs atop a mixed green salad{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Dinner:{" "}
                          </span>{" "}
                          turkey chili made with a 4-ounce (114-gram) turkey
                          breast, chopped onions, garlic, celery, and sweet
                          peppers, 1/2 cup (123 grams) of canned, diced
                          tomatoes, and 1/2 cup (120 grams) of cannellini beans,
                          topped with 1/4 cup (28 grams) of shredded cheese. Add
                          oregano, bay leaves, chili powder, and cumin as
                          desired for taste.{" "}
                        </li>
                      </ul>
                    </div>
                  </Fade>
                )}
              </Popper>
              <Popper id={fri} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div className={classes.paper}>
                      <ul style={{ textAlign: "justify" }}>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Breakfast:{" "}
                          </span>
                          3 whole eggs, 1 apple, and 1 cup (80 grams) of oatmeal
                          made with 1 cup (240 ml) of dairy or plant-based milk{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>
                          1 cup (226 grams) of plain yogurt with 1/4 cup (30
                          grams) of granola and 1/2 cup (70 grams) of
                          raspberries{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Lunch:{" "}
                          </span>{" "}
                          6-ounce (168-gram) chicken breast, 1 medium-sized
                          (151-gram) sweet potato, 3/4 cup (85 grams) of green
                          beans, and 1 ounce (28 grams) of nuts{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Snack:{" "}
                          </span>{" "}
                          1/2 cup (130 grams) of chickpeas atop greens{" "}
                        </li>
                        <li>
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            Dinner:{" "}
                          </span>{" "}
                          burrito bowl with 6 ounces (170 grams) of chopped
                          sirloin steak, 1/2 cup (130 grams) of black beans, 1/2
                          cup (90 grams) of brown rice, 1 cup (35 grams) of
                          shredded lettuce and spinach, and 2 tablespoons (16
                          grams) of salsa{" "}
                        </li>
                      </ul>
                    </div>
                  </Fade>
                )}
              </Popper>
            </div> */}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            // justifyContent:'center',
            // alignItems:'center',
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            textTransform: "capitalize",
            backgroundColor: "#f5f5f5",
            width: "100%",
            padding: 20,
            fontFamily: "sans-serif",
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
            className="HeadingUserGain"
            style={{
              // color:'pink
              fontWeight: "600",
              background: "-webkit-linear-gradient(#000000, #166d3b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              // color: "linear-gradient(147deg, #166d3b 0%, #000000 54%)",
              // backgroundImage: "linear-gradient(147deg, #166d3b 0%, #000000 74%)"
            }}
          >
            Want to Lean weight ?
          </h2>
          <h4
            className="wordingsUserGain"
            style={{
              fontWeight: "normal",
              background: "-webkit-linear-gradient(#000000, #166d3b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The following evidence-based eating and lifestyle changes have been
            shown to help people lose weight.
          </h4>
          <div>
            <h3
              style={{
                color: "white",
                borderRadius: 50,
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Eat More Protein
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
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
              style={{
                color: "white",
                borderRadius: 50,
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Avoid sugary soft drinks and fruit juices
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>
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
              style={{
                color: "white",
                borderRadius: 50,
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Drink more water
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>
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
              style={{
                color: "white",
                borderRadius: 50,
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Exercise and lift weights
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>
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
              style={{
                color: "white",
                borderRadius: 50,
                padding: 10,
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "1.8rem",
                backgroundColor: "#63d471",
                backgroundImage:
                  "linear-gradient(315deg, #63d471 0%, #233329 74%)",
                width: "max-content",
              }}
            >
              Reduce your refined carb intake
            </h3>
            <ul style={{ textAlign: "left", listStyle: "none" }}>
              <li style={{ marginLeft: "-30px" }}>
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  Cutting carbs is a very effective way to lose weight, as it reduces appetite and makes you eat fewer calories 
                  {" "}
                </span>
                Studies have shown that eating a low carb diet until fullness can make you lose about two to three times more weight than a calorie-restricted, low fat diet.

What’s more, low carb diets have many other benefits for health, especially for people with type 2 diabetes or metabolic syndrome 
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
