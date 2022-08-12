// declare constants/variables
const prayers = ["none", "magic", "ranged"];
let selectedPrayer = "magic";
let health = 100;
const jadAttack = ["magic", "ranged"];
let deathCount = 0;
// Jad attack array magic range (math random 0 and 1)
// jad attack magic, if prayer not magic, health - 60
// jad attack ranged, if prayer not ranged, health - 60
// once health = 0, deathCount +1, health becomes 100 again.

// clicking 'start' will enable the game.
// clicking 'quit' button will end the game and show deathcount.

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
// function to append css of a circle to magic
const magicPrayerCircle = () => {
  $("#pray-magic").css("background-color", "lightyellow");
  $("#pray-magic").css("opacity", "0.3");
  $("#pray-magic").css("border-radius", "50%");
  // set background of prayer
  $("#prayer").css("background-image", "url(images/Protect_from_Magic.png)");
};
// function to append css of a circle to ranged
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
// function to change player image to hold crossbow
const wieldCrossbow = () => {
  $("#player").css("width", "100px");
  $("#player").css(
    "background-image",
    "url(images/800px-Rune_crossbow_equipped_female.png)"
  );
};
// function to change player image to hold blowpipe
const wieldBlowpipe = () => {
  $("#player").css("width", "60px");
  $("#player").css(
    "background-image",
    "url(images/320px-Toxic_blowpipe_equipped_female.png)"
  );
};
// function to change jad background image to magic and play magic sound
const setJadMagic = () => {
  $("#jad").css("background-image", "url(images/jad/jad-magic.gif)");
  $("#magic-sound")[0].play();
};
// function to change jad background image to ranged and play ranged sound
const setJadRanged = () => {
  $("#jad").css("background-image", "url(images/jad/jad-ranged.gif)");
  $("#ranged-sound")[0].play();
};
// function to reduce the player's health randomly. returns the value of the health.
const reduceHealth = () => {
  // damage from 20 to 38
  let dmg = Math.ceil(Math.random() * 19) + 19;
  // if player health is greater than damage, reduce health by damage
  if (health - dmg > 0) {
    health -= dmg;
    return health;
    // if player health is less than damage, reset health to 100, add to deathcount
  } else {
    deathCount++;
    //set health bar back to 100
    health = 100;
    return 100;
  }
};
// function that takes in a value and sets the health bar width to that value.
const setHealth = (value) => {
  $("#hp-green").css("width", value + "%");
};
// function that randomly returns a number 0 or 1
const random = () => {
  return Math.floor(Math.random() * 2);
};
// function to change jad's attack to magic or ranged, every 3 secconds.
// at the end of the 3 second interval, if the player's prayer is not the same as the jad's attack, reduce the player's health.
const jadAttackChange = () => {
  setTimeout(() => {
    if (random() === 0) {
      setJadMagic();
      if (selectedPrayer !== "magic") {
        setHealth(reduceHealth());
      }
    } else {
      setJadRanged();
      if (selectedPrayer !== "ranged") {
        setHealth(reduceHealth());
      }
    }

    jadAttackChange();
  }, 3000);
};
// function to stop jad's attack change and audio
const stopJadAttackChange = () => {
  clearTimeout();
  $("#magic-sound")[0].pause();
  $("#ranged-sound")[0].pause();
}

// const jadAttackChange = () => {
//   setTimeout(() => {
//     if (random() === 0) {
//       setJadMagic();
//     } else {
//       setJadRanged();
//     }
//     jadAttackChange();
//   } , 3000);
// }

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
    changeInventoryPrayer();
    magicPrayerCircle();
    removeRangePrayerCircle();
    // set weapon to bp
    // start game, set jad to attack
    jadAttackChange();
  });

  // on click, quit game
  $("#quit").on("click", () => {
    stopJadAttackChange();
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
    if (event.code === "Digit3") {
      changeInventoryPrayer();
    } else if (event.code === "Digit4") {
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
        console.log("switch to cb");
        wieldCrossbow();
        $(`#item28`).addClass("crossbow").removeClass("blowpipe");
      }, 600);
    } else if ($(`#item28`).hasClass("crossbow")) {
      setTimeout(function () {
        console.log("switch to bp");
        wieldBlowpipe();
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
