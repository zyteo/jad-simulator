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

// functions

// function to change inventory screen to items
const changeInventoryItem = () => {
  $("#inventory").css("background-image", "url(images/inventory.JPG)");
};
// function to change inventory screen to prayer
const changeInventoryPrayer = () => {
  $("#inventory").css("background-image", "url(images/prayers.JPG)");
};
// function to append css of a circle to magic
const magicPrayerCircle = () => {
  $("#pray-magic").css("background-color", "lightyellow");
  $("#pray-magic").css("opacity", "0.3");
  $("#pray-magic").css("border-radius", "50%");
};
// function to append css of a circle to ranged
const rangePrayerCircle = () => {
  $("#pray-ranged").css("background-color", "lightyellow");
  $("#pray-ranged").css("opacity", "0.3");
  $("#pray-ranged").css("border-radius", "50%");
};
// function to remove css of magic circle
const removeMagicPrayerCircle = () => {
  $("#pray-magic").css("opacity", "0");
};
// function to remove css of ranged circle
const removeRangePrayerCircle = () => {
  $("#pray-ranged").css("opacity", "0");
};

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
    magicPrayerCircle();
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
  // choosing the inventory item screen
  $("#invent-items").on("click", () => {
    $("#main-invent-pray")[0].style.display = "none";
    $("#main-invent-item")[0].style.display = "";
    changeInventoryItem();
  });
  // choosing the inventory prayer screen
  $("#invent-prayer").on("click", () => {
    $("#main-invent-item")[0].style.display = "none";
    $("#main-invent-pray")[0].style.display = "";
    changeInventoryPrayer();
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

  // onclick pray-magic, call funtion magicPrayerCircle
  $("#pray-magic").on("click", () => {
    magicPrayerCircle();
    removeRangePrayerCircle();
    selectedPrayer = "magic";
  });

  // onclick pray-range, call funtion rangePrayerCircle
  $("#pray-ranged").on("click", () => {
    rangePrayerCircle();
    removeMagicPrayerCircle();
    selectedPrayer = "ranged";
  });

  // If prayer on magic
  // Click magic becomes none, click ranged becomes ranged
  // white is none, red is magic, green is ranged
  // if ($(`#prayer`)[0].style.background == "red") {
  //   $(`#pray-magic`).on("click", () => {
  //     magicPrayerCircle();
  //     let selectedPrayer = "none";
  //     $(`#prayer`)[0].style.background = "white";
  //     console.log("praying", selectedPrayer);
  //   });
  //   $(`#pray-ranged`).on("click", () => {
  //     rangePrayerCircle();
  //     let selectedPrayer = "ranged";
  //     $(`#prayer`)[0].style.background = "green";
  //     console.log("praying", selectedPrayer);
  //   });
  // }
  // if ($(`#prayer`)[0].style.background == "green") {
  //   $(`#pray-ranged`).on("click", () => {
  //     rangePrayerCircle();
  //     let selectedPrayer = "none";
  //     console.log("praying", selectedPrayer);
  //     $(`#prayer`)[0].style.background = "white";
  //   });
  //   $(`#pray-magic`).on("click", () => {
  //     magicPrayerCircle();
  //     let selectedPrayer = "magic";
  //     console.log("praying", selectedPrayer);
  //     $(`#prayer`)[0].style.background = "red";
  //   });
  // }
  // if ($(`#prayer`)[0].style.background == "white") {
  //   $(`#pray-ranged`).on("click", () => {
  //     rangePrayerCircle();
  //     let selectedPrayer = "ranged";
  //     console.log("praying", selectedPrayer);
  //     $(`#prayer`)[0].style.background = "green";
  //   });
  //   $(`#pray-magic`).on("click", () => {
  //     magicPrayerCircle();
  //     let selectedPrayer = "magic";
  //     console.log("praying", selectedPrayer);
  //     $(`#prayer`)[0].style.background = "red";
  //   });
  // }
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
