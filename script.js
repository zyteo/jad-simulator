// declare constants/variables
const prayers = ["none", "magic", "ranged"];
let selectedPrayer = "magic";
let health = 100;
const jadAttack = ["magic", "ranged"];
let deathCount = 0;
// const inventoryScreen = ['prayer', 'items'];
// let currentScreen = 'prayer';
// let inventoryItems = [4,4,4,4,4,4,4,4,4,4,4];

// Jad attack array magic range (math random 0 and 1)
// jad attack magic, if prayer not magic, health - 60
// jad attack ranged, if prayer not ranged, health - 60
// once health = 0, deathCount +1, health becomes 100 again.

// clicking drinking potion

// clicking 'start' will enable the game.
// clicking 'quit' button will end the game and show deathcount.
// jquery/js event listeners
$(() => {
  // on click, start game
  $("#start").on("click", () => {
    $("#main")[0].style.display = "";
    $("#quit")[0].style.display = "";
    $("#start")[0].style.display = "none";

    selectedPrayer = "magic";
    health = 100;
    deathCount = 0;
    $("#main-invent-item")[0].style.display = "none";
    $("#main-invent-pray")[0].style.display = "";
    // set weapon to bp
  });

  // on click, quit game
  $("#quit").on("click", () => {
    $("#main")[0].style.display = "none";
    $("#quit")[0].style.display = "none";
    $("#start")[0].style.display = "";
  });

  // jad
  $("#jad").on("click", () => {
    console.log("jad");
  });
  // choosing the inventory screen
  $("#invent-items").on("click", () => {
    $("#main-invent-pray")[0].style.display = "none";
    $("#main-invent-item")[0].style.display = "";

    // setbackground to xxx
  });
  $("#invent-prayer").on("click", () => {
    $("#main-invent-item")[0].style.display = "none";
    $("#main-invent-pray")[0].style.display = "";

    // set background to xxx
  });
  // for loop for each inventory item
  // depends on whether screen is prayer screen or inventory screen
  // if screen prayer, only onclick for item 18 and 23,
  // if screen invent, then for food
  for (let i = 1; i < 29; i++) {
    $(`#item${i}`).on("click", () => {
      console.log(i);
    });
  }

  // If prayer on magic
  // Click magic becomes none, click ranged becomes ranged
  // white is none, red is magic, green is ranged
  if ($(`#prayer`)[0].style.background == "red") {
    $(`#pray-magic`).on("click", () => {
      let selectedPrayer = "none";
      $(`#prayer`)[0].style.background = "white";
      console.log("praying", selectedPrayer);
    });
    $(`#pray-ranged`).on("click", () => {
      let selectedPrayer = "ranged";
      $(`#prayer`)[0].style.background = "green";
      console.log("praying", selectedPrayer);
    });
  }
  if ($(`#prayer`)[0].style.background == "green") {
    $(`#pray-ranged`).on("click", () => {
      let selectedPrayer = "none";
      console.log("praying", selectedPrayer);
      $(`#prayer`)[0].style.background = "white";
    });
    $(`#pray-magic`).on("click", () => {
      let selectedPrayer = "magic";
      console.log("praying", selectedPrayer);
      $(`#prayer`)[0].style.background = "red";
    });
  }
  if ($(`#prayer`)[0].style.background == "white") {
    $(`#pray-ranged`).on("click", () => {
      let selectedPrayer = "ranged";
      console.log("praying", selectedPrayer);
      $(`#prayer`)[0].style.background = "green";
    });
    $(`#pray-magic`).on("click", () => {
      let selectedPrayer = "magic";
      console.log("praying", selectedPrayer);
      $(`#prayer`)[0].style.background = "red";
    });
  }
});

// Sprites needed
// Magic prayer
// Ranged prayer
// Jad magic attack with sound
// Jad ranged attack with sound
// Player with bp
// Player with crossbow
// Healthbar

// Prayer screen, clickable for magic and ranged
// Item inventory screen, brews, restore and crossbow
