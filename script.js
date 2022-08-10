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
  $("#main-invent-pray")[0].style.display = "none";
  $("#main-invent-item")[0].style.display = "";
  $("#inventory").css("background-image", "url(images/inventory.JPG)");
};
// function to change inventory screen to prayer
const changeInventoryPrayer = () => {
  $("#main-invent-item")[0].style.display = "none";
  $("#main-invent-pray")[0].style.display = "";
  $("#inventory").css("background-image", "url(images/prayers.JPG)");
};
// function to append css of a circle to magic and set selectedPrayer to magic
const magicPrayerCircle = () => {
  $("#pray-magic").css("background-color", "lightyellow");
  $("#pray-magic").css("opacity", "0.3");
  $("#pray-magic").css("border-radius", "50%");
  // set background of prayer
  $("#prayer").css("background-image", "url(images/Protect_from_Magic.png)");
};
// function to append css of a circle to ranged and set selectedPrayer to ranged
const rangePrayerCircle = () => {
  $("#pray-ranged").css("background-color", "lightyellow");
  $("#pray-ranged").css("opacity", "0.3");
  $("#pray-ranged").css("border-radius", "50%");
  // set background of prayer
  $("#prayer").css("background-image", "url(images/Protect_from_Missiles.png)");
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
    removeRangePrayerCircle();
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
    changeInventoryItem();
  });
  // choosing the inventory prayer screen
  $("#invent-prayer").on("click", () => {
    changeInventoryPrayer();
  });
  // choosing the inventory screen with hotkey
  $(document)[0].onkeydown = (event) => {
    if (event.code === "F3") {
      changeInventoryPrayer();
    } else if (event.code === "F4") {
      changeInventoryItem();
    }
  };

  // for saradomin brew
  for (let i = 1; i < 15; i++) {
    $(`#item${i}`).on("click", () => {
      if ($(`#item${i}`).hasClass("saradomin-brew-4")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("saradomin-brew-3")
            .removeClass("saradomin-brew-4");
        }, 600);
      } else if ($(`#item${i}`).hasClass("saradomin-brew-3")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("saradomin-brew-2")
            .removeClass("saradomin-brew-3");
        }, 600);
      } else if ($(`#item${i}`).hasClass("saradomin-brew-2")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("saradomin-brew-1")
            .removeClass("saradomin-brew-2");
        }, 600);
      } else if ($(`#item${i}`).hasClass("saradomin-brew-1")) {
        setTimeout(function () {
          $(`#item${i}`).addClass("empty-vial").removeClass("saradomin-brew-1");
        }, 600);
      }
    });
  }
  // for super restore
  for (let i = 15; i < 28; i++) {
    $(`#item${i}`).on("click", () => {
      if ($(`#item${i}`).hasClass("super-restore-4")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("super-restore-3")
            .removeClass("super-restore-4");
        }, 600);
      } else if ($(`#item${i}`).hasClass("super-restore-3")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("super-restore-2")
            .removeClass("super-restore-3");
        }, 600);
      } else if ($(`#item${i}`).hasClass("super-restore-2")) {
        setTimeout(function () {
          $(`#item${i}`)
            .addClass("super-restore-1")
            .removeClass("super-restore-2");
        }, 600);
      } else if ($(`#item${i}`).hasClass("super-restore-1")) {
        setTimeout(function () {
          $(`#item${i}`).addClass("empty-vial").removeClass("super-restore-1");
        }, 600);
      }
    });
  }
  // weapon changing
  $(`#item28`).on("click", () => {
    if ($(`#item28`).hasClass("blowpipe")) {
      setTimeout(function () {
        $(`#item28`).addClass("crossbow").removeClass("blowpipe");
      }, 600);
    } else if ($(`#item28`).hasClass("crossbow")) {
      setTimeout(function () {
        $(`#item28`).addClass("blowpipe").removeClass("crossbow");
      }, 600);
    }
  });

  // onclick pray-magic
  $("#pray-magic").on("click", () => {
    // if selectedPrayer is magic, then clicking pray-magic will set selectedPrayer to none.
    if (selectedPrayer === "magic") {
      removeMagicPrayerCircle();
      selectedPrayer = "none";
      $("#prayer").css("background-image", "url()");
      // if selectedPrayer is range, then clicking pray-magic will set selectedPrayer to magic.
    } else if (selectedPrayer === "ranged") {
      removeRangePrayerCircle();
      selectedPrayer = "magic";
      magicPrayerCircle();
      // if selectedPrayer is none, then clicking pray-magic will set selectedPrayer to magic.
    } else {
      magicPrayerCircle();
      selectedPrayer = "magic";
    }
  });
  // onclick pray-range
  $("#pray-ranged").on("click", () => {
    // if selectedPrayer is magic, then clicking pray-range will set selectedPrayer to range.
    if (selectedPrayer === "magic") {
      removeMagicPrayerCircle();
      selectedPrayer = "ranged";
      rangePrayerCircle();
      // if selectedPrayer is range, then clicking pray-range will set selectedPrayer to none.
    } else if (selectedPrayer === "ranged") {
      removeRangePrayerCircle();
      selectedPrayer = "none";
      $("#prayer").css("background-image", "url()");
      // if selectedPrayer is none, then clicking pray-range will set selectedPrayer to range.
    } else {
      rangePrayerCircle();
      selectedPrayer = "ranged";
    }
  });
});

// Sprites needed
// Jad magic attack with sound
// Jad ranged attack with sound
// Player with bp
// Player with crossbow
// Healthbar

// Item inventory screen, brews, restore and crossbow
