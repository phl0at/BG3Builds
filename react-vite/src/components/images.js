// In an attempt to prevent DNS lookups through slow SSL connections,
// I decided to save all images in the site's local environment, import them into this file
// and then export them in an Images object - as opposed to doing fetch requests to a public API.
// The idea is that I can import the object into any component,
// and then dynamically key into an image based on user input to display it on screen


// CHARACTERS
import Sadowheart from "../../../images/error_icon/Sadowheart.png";
import Astarion from "../../../images/char_icons/Astarion.png";
import Gale from "../../../images/char_icons/Gale.png";
import Custom from "../../../images/char_icons/Custom.png";
import DarkUrge from "../../../images/char_icons/DarkUrge.png";
import Laezel from "../../../images/char_icons/Laezel.jpg";
import Shadowheart from "../../../images/char_icons/Shadowheart.jpg";
import Karlach from "../../../images/char_icons/Karlach.jpg";
import Wyll from "../../../images/char_icons/Wyll.jpeg";
// RACES
import Elf from "../../../images/race_icons/Elf.png";
import Tiefling from "../../../images/race_icons/Tiefling.png";
import Drow from "../../../images/race_icons/Drow.png";
import Human from "../../../images/race_icons/Human.png";
import Githyanki from "../../../images/race_icons/Githyanki.png";
import Dwarf from "../../../images/race_icons/Dwarf.png";
import Halfelf from "../../../images/race_icons/Halfelf.png";
import Halfling from "../../../images/race_icons/Halfling.png";
import Gnome from "../../../images/race_icons/Gnome.png";
import Dragonborn from "../../../images/race_icons/Dragonborn.png";
import Halforc from "../../../images/race_icons/Halforc.png";
// CLASSES
import Barbarian from "../../../images/class_icons/Barbarian.png";
import Bard from "../../../images/class_icons/Bard.png";
import Cleric from "../../../images/class_icons/Cleric.png";
import Druid from "../../../images/class_icons/Druid.png";
import Fighter from "../../../images/class_icons/Fighter.png";
import Monk from "../../../images/class_icons/Monk.png";
import Paladin from "../../../images/class_icons/Paladin.png";
import Ranger from "../../../images/class_icons/Ranger.png";
import Rogue from "../../../images/class_icons/Rogue.png";
import Sorcerer from "../../../images/class_icons/Sorcerer.png";
import Warlock from "../../../images/class_icons/Warlock.png";
import Wizard from "../../../images/class_icons/Wizard.png";
// BACKGROUNDS
import Acolyte from "../../../images/bg_icons/Acolyte.png";
import Charlatan from "../../../images/bg_icons/Charlatan.png";
import Criminal from "../../../images/bg_icons/Criminal.png";
import Entertainer from "../../../images/bg_icons/Entertainer.png";
import FolkHero from "../../../images/bg_icons/FolkHero.png";
import GuildArtisan from "../../../images/bg_icons/GuildArtisan.png";
import HauntedOne from "../../../images/bg_icons/HauntedOne.png";
import Noble from "../../../images/bg_icons/Noble.png";
import Outlander from "../../../images/bg_icons/Outlander.png";
import Sage from "../../../images/bg_icons/Sage.png";
import Soldier from "../../../images/bg_icons/Soldier.png";
import Urchin from "../../../images/bg_icons/Urchin.png";
// ABILITIES
import Strength from "../../../images/stat_icons/Strength.png";
import Dexterity from "../../../images/stat_icons/Dexterity.png";
import Constitution from "../../../images/stat_icons/Constitution.png";
import Intelligence from "../../../images/stat_icons/Intelligence.png";
import Wisdom from "../../../images/stat_icons/Wisdom.png";
import Charisma from "../../../images/stat_icons/Charisma.png";
// ITEMS
// ----------- HELMETS
import HasteHelm from "../../../images/item_icons/HasteHelm.png";
import DiademofArcaneSynergy from "../../../images/item_icons/DiademofArcaneSynergy.png";
import MaskofSoulPerception from "../../../images/item_icons/MaskofSoulPerception.png";
import Birthright from "../../../images/item_icons/Birthright.png";
import CircletofHunting from "../../../images/item_icons/CircletofHunting.png";
// ----------- AMULETS
import AmuletofBhaal from "../../../images/item_icons/AmuletofBhaal.png";
import AmuletoftheHarpers from "../../../images/item_icons/AmuletoftheHarpers.png";
import PeriaptofWoundClosure from "../../../images/item_icons/PeriaptofWoundClosure.png";
import AmuletofGreaterHealth from "../../../images/item_icons/AmuletofGreaterHealth.png";
import AmuletoftheDevout from "../../../images/item_icons/AmuletoftheDevout.png";

// ----------- RINGS
import CausticBand from "../../../images/item_icons/CausticBand.png";
import CallousGlowRing from "../../../images/item_icons/CallousGlowRing.png";
import KillersSweetheart from "../../../images/item_icons/KillersSweetheart.png";
import RingofArcaneSynergy from "../../../images/item_icons/RingofArcaneSynergy.png";
import RingofFreeAction from "../../../images/item_icons/RingofFreeAction.png";

// ----------- CLOAKS
import CloakofProtection from "../../../images/item_icons/CloakofProtection.png";
import TheDeathstalkerMantle from "../../../images/item_icons/TheDeathstalkerMantle.png";
import ShadeSlayerCloak from "../../../images/item_icons/ShadeSlayerCloak.png";
import CindermothCloak from "../../../images/item_icons/CindermothCloak.png";
import ReverseRainCloak from "../../../images/item_icons/ReverseRainCloak.png";

// ----------- ARMORS
import LeatherArmour from "../../../images/item_icons/LeatherArmour.png";
import YuanTiScaleMail from "../../../images/item_icons/YuanTiScaleMail.png";
import BhaalistArmor from "../../../images/item_icons/BhaalistArmor.png";
import DarkJusticiarHalfPlate from "../../../images/item_icons/DarkJusticiarHalfPlate.png";
import HellduskArmour from "../../../images/item_icons/HellduskArmour.png";

// ----------- GLOVES
import GlovesofDexterity from "../../../images/item_icons/GlovesofDexterity.png";
import BhaalistGloves from "../../../images/item_icons/BhaalistGloves.png";
import CraterfleshGloves from "../../../images/item_icons/CraterfleshGloves.png";
import DarkJusticiarGauntlets from "../../../images/item_icons/DarkJusticiarGauntlets.png";
import GlovesofArchery from "../../../images/item_icons/GlovesofArchery.png";

// ----------- BOOTS
import DrowLeatherBoots from "../../../images/item_icons/DrowLeatherBoots.png";
import BootsofStormyClamour from "../../../images/item_icons/BootsofStormyClamour.png";
import DarkJusticiarBoots from "../../../images/item_icons/DarkJusticiarBoots.png";
import DisintegratingNightWalkers from "../../../images/item_icons/DisintegratingNightWalkers.png";
import BootsofPersistence from "../../../images/item_icons/BootsofPersistence.png";

// ----------- MELEE WEAPONS
import ClubofHillGiantStrength from "../../../images/item_icons/ClubofHillGiantStrength.png";
import AssassinsTouch from "../../../images/item_icons/AssassinsTouch.png";
import KnifeoftheUndermountainKing from "../../../images/item_icons/KnifeoftheUndermountainKing.png";
import BalduransGiantslayer from "../../../images/item_icons/BalduransGiantslayer.png";
import PooScraper from "../../../images/item_icons/PooScraper.png";

// ----------- RANGED WEAPONS
import TitanstringBow from "../../../images/item_icons/TitanstringBow.png";
import GontrMael from "../../../images/item_icons/GontrMael.png";
import HellfireHandCrossbow from "../../../images/item_icons/HellfireHandCrossbow.png";
import NeverMisser from "../../../images/item_icons/NeverMisser.png";
import Blightbringer from "../../../images/item_icons/Blightbringer.png";

export const Images = {
  characters: {
    Astarion,
    Gale,
    Custom,
    DarkUrge,
    Laezel,
    Shadowheart,
    Karlach,
    Wyll,
  },
  races: {
    Elf,
    Tiefling,
    Drow,
    Human,
    Githyanki,
    Dwarf,
    Halfelf,
    Halfling,
    Gnome,
    Dragonborn,
    Halforc,
  },
  classes: {
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
  },
  backgrounds: {
    Acolyte,
    Charlatan,
    Criminal,
    Entertainer,
    FolkHero,
    GuildArtisan,
    HauntedOne,
    Noble,
    Outlander,
    Sage,
    Soldier,
    Urchin,
  },
  abilities: {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma,
  },
  equipment: {
    Blightbringer,
    NeverMisser,
    HellfireHandCrossbow,
    GontrMael,
    RingofFreeAction,
    RingofArcaneSynergy,
    KillersSweetheart,
    AmuletoftheDevout,
    AmuletofGreaterHealth,
    PeriaptofWoundClosure,
    AmuletoftheHarpers,
    PooScraper,
    BalduransGiantslayer,
    KnifeoftheUndermountainKing,
    BootsofPersistence,
    DisintegratingNightWalkers,
    DarkJusticiarBoots,
    BootsofStormyClamour,
    GlovesofArchery,
    DarkJusticiarGauntlets,
    CraterfleshGloves,
    BhaalistGloves,
    HellduskArmour,
    DarkJusticiarHalfPlate,
    BhaalistArmor,
    YuanTiScaleMail,
    ReverseRainCloak,
    CindermothCloak,
    ShadeSlayerCloak,
    TheDeathstalkerMantle,
    CircletofHunting,
    Birthright,
    MaskofSoulPerception,
    DiademofArcaneSynergy,
    HasteHelm,
    CloakofProtection,
    LeatherArmour,
    GlovesofDexterity,
    DrowLeatherBoots,
    AmuletofBhaal,
    CausticBand,
    CallousGlowRing,
    AssassinsTouch,
    ClubofHillGiantStrength,
    TitanstringBow,
  },
  error: {
    Sadowheart,
  },
};
