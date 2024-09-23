# BG3Builds

## [Link To Site](https://bg3builds.onrender.com)

## [Wiki](https://github.com/phl0at/BG3Builds/wiki)

## Technologies Used

<p align="left">
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" width="40" style="margin-right: 10px;">
  <img src=https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png alt="JavaScript" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" width="40" style="margin-right: 10px;">
  <img src=  https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png alt="PostgreSQL" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="40" style="margin-right: 10px;">
  <img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="GIT" width="40">
  <img src=https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png alt="GIT" width="40">
</p>

## About
**Please note:**
<b>
<ol>
  <li>This is my first big solo project. It was submitted as a final to graduate the AppAcademy Web Development bootcamp and is very much a work in progress.</li>
  <li>If you are familiar with the the game you will notice that many systems have not been implemented into the site...yet.</li>
  <li>BG3Builds is hosted with a free instance of <a href="https://onrender.com">OnRender</a>, so the server spins down after 50 seconds of inactivity and can take 1-3 minutes to spin back up.</li>
</ol>
</b>
With that out of the way, it's time to break down a couple features and show off some technologies and code!

<br/>
<br/>

---

<br/>
<br/>

### <ins>UI/UX Design</ins>

This is the main page where all the magic happens:

<br/>
<br/>

![bg3bhome](https://github.com/user-attachments/assets/b530bead-8107-45ca-afec-3f7c1c4e091d)

<br/>
<br/>

You may have caught how some of these components are similar to menus found in-game. The goal is to have the UX be familiar to people who've played before, so I used a few UI elements as loose wireframes for the site - here's side-by-side of the in game class menu (left) and the site's class menu (right):

<br/>
<br/>


<img width = "50%" src="https://github.com/user-attachments/assets/27eb3bf4-ec27-4926-a2d7-1691e5e0053f"><img width = "50%" src="https://github.com/user-attachments/assets/da7f314b-1a7e-4598-bc74-94e621a58078">

<br/>
<br/>

I knew an exact copy would be not only difficult in vanilla CSS (a requirement of the bootcamp), but it would also be impractical given the functional differences between actually playing the game and filling out an online character sheet.
I'm planning on possibly converting over to a UI framework, but that is low on the priority list.

<br/>
<br/>


All images are from in-game artwork and are hosted on [ImagekitIO](https://imagekit.io). This has a really cool React library that takes care of things like caching and converting the images to .webp format.

<br/>
<br/>

---

<br/>
<br/>

### <ins>Code Snippets and Logic</ins>

Let's take a look at some of the code used to create that familiar UX by checking out Abilities.

Before beginning, here are a few important things to know about how this system works:

<ul>
  <li>There are <b>6 Abilities</b> with <b>27 Ability Points</b> that a player can distribute between each ability.</li>
  <li>All abilities start at <b>8</b>, this is also their minimum value. Each ability can be increased a maximum of <b>7 times</b>.</li>
  <li>The <b>first 5</b> increases cost <b>1 Ability Point</b> and the <b>last 2</b> increases cost <b>2 Ability Points</b>.</li>
  <li>In addition to the <b>27 Ability Points</b>, there are <b>+1</b> and <b>+2</b> bonuses. Only one of each bonus can be applied, and they cannot both be applied to the same ability.</li>
</ul>

<br/>
<br/>

Here are images showing a blank slate Ability menu with no points spent (left) and a filled out Ability menu with all points and bonuses spent (right):

<img width = "50%" src="https://github.com/user-attachments/assets/64ddb157-94a5-4f25-834c-e044fc9d5e5b"><img width = "50%" src="https://github.com/user-attachments/assets/f589e1d0-d1cd-49d3-a6b9-d49720c9a292">


<br/>
<br/>

So how does this work under the hood?

I started with giving each ability their own component; and in order to follow the DRY principal, I made a single component which is rendered inside an Array.Map(). This iterates over each ability type as a string, and passes that string to the component:

```js
  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

...
  <div className={styles.abilityList}>
    <div className={styles.heading}>
      <div className={plus_2 === "" ? styles.red : ""}>+2</div>
      <div className={plus_1 === "" ? styles.red : ""}>+1</div>
    </div>
    {abilities.map((ability) => {
      return <Ability key={ability} ability={ability} />;
    })}
  </div>
...
```

<br/>
<br/>

Within each component, I keep track of how many times a given ability has been increased or decreased with a useState value. Because each ability will always start at 8 and can never go below that, clicks will initialize to the ability's current value minus 8.

```js
  const [clicks, setClicks] = useState(currentAbilityValue - 8);
```
<br/>
<br/>

The reason I go with this approach is specificaly due to the +1 and +2 bonuses. For example, if Strength is given the +2 bonus, its' minimum value is now 10. That needs to be tracked so the bonus is not factored into the number of clicks/increases. I do this with a useEffect that triggers a render every time the given ability's value changes. Within the useEffect is an if/else statement that will check whether the ability has either a +1, +2, or no bonus applied, and then set the number of clicks accordingly.


```js
  useEffect(() => {
    if (plus_2 === ability) {
      setClicks(currentAbilityValue - 10);
    } else if (plus_1 === ability) {
      setClicks(currentAbilityValue - 9);
    } else {
      setClicks(currentAbilityValue - 8);
    }
  }, [currentAbilityValue]);
```
<br/>
<br/>

Now to handle the logic for increasing or decreasing an ability. This is done with helper functions that are called by the onClick event; these functions will dispatch Redux actions to either raise or lower an ability, with a conditional if/selse statement to determine whether to spend/grant 1 or 2 Ability Points (based on the clicks value from earlier). There is additional logic that will throw an error in the edge case where someone tries to click the + button on an ability that needs 2 Ability Points to be increased, but only 1 Ability Point is available:

```js
  const clickLower = (e, type) => {
    e.preventDefault();
    if (clicks < 6) {
      dispatch(action("build/raisePoints", 1));
      dispatch(action("build/lowerAbility", type));
    } else {
      dispatch(action("build/raisePoints", 2));
      dispatch(action("build/lowerAbility", type));
    }
  };

  const clickRaise = (e, type) => {
    e.preventDefault();
    if (clicks < 5) {
      dispatch(action("build/lowerPoints", 1));
      dispatch(action("build/raiseAbility", type));
    } else if ((clicks >= 5) & (points > 1)) {
      dispatch(action("build/lowerPoints", 2));
      dispatch(action("build/raiseAbility", type));
    } else {
      // Throw an error if the user tries increasing an ability
      // that's been increased 5 times but only 1 point remains.
      setModalContent(
        <ErrorModal
          errors={{
            FAQ: ["Increasing this ability requires 2 points"],
          }}
        />
      );
    }
  };

```
<br/>
<br/>

The last bit handles the two bonuses. As mentioned earlier, you can apply a +1 to any one ability, and a +2 to any other one ability, but cannot apply the +1 and +2 to the same ability. These two onClick helper functions will apply the selected bonus to an ability; if the bonus is already applied to that ability, it will instead clear the bonus; and if you click a bonus on an ability that already has the other bonus, it will clear that other bonus after applying the one selected.

```js
  const clickPlusTwo = (e, ability) => {
    e.preventDefault();
    if (plus_2 === ability) {
      dispatch(action("build/clearBonus", { amount: "plus_2", ability }));
    } else {
      dispatch(action("build/setBonus", { amount: "plus_2", ability }));
      if (plus_1 === ability) {
        dispatch(action("build/clearBonus", { amount: "plus_1", ability }));
      }
    }
  };

  const clickPlusOne = (e, ability) => {
    e.preventDefault();
    if (plus_1 === ability) {
      dispatch(action("build/clearBonus", { amount: "plus_1", ability }));
    } else {
      dispatch(action("build/setBonus", { amount: "plus_1", ability }));
      if (plus_2 === ability) {
        dispatch(action("build/clearBonus", { amount: "plus_2", ability }));
      }
    }
  };
```

<br/>
<br/>

---

<br/>
<br/>

As more features are implemented, more code snippets and logic will be put on display. Here's a list of some features I'm working on and have planned:

<ul>
  <li>Cantrips (near completion)</li>
  <li>Spells</li>
  <li>Throughput Calculator</li>
  <li>Feats</li>
  <li>And more...</li>
</ul>

<br/>
<br/>

Thanks for taking the time to check out what I'm working on! If you're hiring, here's a link to [my portfolio site](https://mxwll155.wixsite.com/portfolio)!

<br/>
<br/>
<br/>
<br/>
