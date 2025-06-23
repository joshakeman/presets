// Austen
import dashwoodBefore from "../../public/images/presets/austen/before/dashwood.webp";
import dashwoodAfter from "../../public/images/presets/austen/after/dashwood.webp";
import fannyBefore from "../../public/images/presets/austen/before/fanny.webp";
import fannyAfter from "../../public/images/presets/austen/after/fanny.webp";
import highburyBefore from "../../public/images/presets/austen/before/highbury.webp";
import highburyAfter from "../../public/images/presets/austen/after/highbury.webp";
import longbournBefore from "../../public/images/presets/austen/before/longbourn.webp";
import longbournAfter from "../../public/images/presets/austen/after/longbourn.webp";
import tilneyBefore from "../../public/images/presets/austen/before/tilney.webp";
import tilneyAfter from "../../public/images/presets/austen/after/tilney.webp";
// Dickens
import chasneyWoldBefore from "../../public/images/presets/dickens/before/chasney-wold.webp";
import chasneyAfter from "../../public/images/presets/dickens/before/chasney-wold.webp";
import dotheBoysBefore from "../../public/images/presets/dickens/before/dotheboys.webp";
import dotheBoysAfter from "../../public/images/presets/dickens/after/dotheboys.webp";
import gradgrindBefore from "../../public/images/presets/dickens/before/gradgrind.webp";
import gradgrindAfter from "../../public/images/presets/dickens/after/gradgrind.webp";
import havishamBefore from "../../public/images/presets/dickens/before/havisham.webp";
import havishamAfter from "../../public/images/presets/dickens/before/havisham.webp";
import tattycoramBefore from "../../public/images/presets/dickens/before/tattycoram.webp";
import tattycoramAfter from "../../public/images/presets/dickens/before/tattycoram.webp";
// Fiztgerald
import gloriaBefore from "../../public/images/presets/fitzgerald/before/gloria.webp";
import gloriaAfter from "../../public/images/presets/fitzgerald/after/gloria.webp";
import morningSideHeightsBefore from "../../public/images/presets/fitzgerald/before/morningside-heights.webp";
import morningSideHeightsAfter from "../../public/images/presets/fitzgerald/after/morningside-heights.webp";
import rosalindBefore from "../../public/images/presets/fitzgerald/before/rosalind.webp";
import rosalindAfter from "../../public/images/presets/fitzgerald/after/rosalind.webp";
import valleyOfAshesBefore from "../../public/images/presets/fitzgerald/before/valley-of-ashes.webp";
import valleyOfAshesAfter from "../../public/images/presets/fitzgerald/after/valley-of-ashes.webp";
import westEggBefore from "../../public/images/presets/fitzgerald/before/west-egg.webp";
import westEggAfter from "../../public/images/presets/fitzgerald/after/west-egg.webp";
//Poe
import dupinBefore from "../../public/images/presets/poe/before/dupin.webp";
import dupinAfter from "../../public/images/presets/poe/after/dupin.webp";
import ligeiaBefore from "../../public/images/presets/poe/before/ligeia.webp";
import ligeiaAfter from "../../public/images/presets/poe/after/ligeia.webp";
import prosperoBefore from "../../public/images/presets/poe/before/prospero.webp";
import prosperoAfter from "../../public/images/presets/poe/after/prospero.webp";
import roderickBefore from "../../public/images/presets/poe/before/roderick.webp";
import roderickAfter from "../../public/images/presets/poe/after/roderick.webp";
import ulelumeBefore from "../../public/images/presets/poe/before/ulelume.webp";
import ulelumeAfter from "../../public/images/presets/poe/after/ulelume.webp";
// Title cards
import austenTitle from "../../public/images/presets/austen/title-card.webp";
import dickensTitle from "../../public/images/presets/dickens/title-card.webp";
import fitzgeraldTitle from "../../public/images/presets/fitzgerald/title-card.webp";
import poeTitle from "../../public/images/presets/poe/title-card.webp";

// Individual sets
const austen = [
  { titleCard: austenTitle.src, altTitleText: "Jane Austen" },
  {
    title: "Dashwood",
    author: "Jane Austen",
    before: { imageUrl: dashwoodBefore.src },
    after: { imageUrl: dashwoodAfter.src },
    quote: `"The family of Dashwood had long been settled in Sussex."`,
    quotefrom: "Sense and Sensibility",
    alt: "A photograph of a stream running under a moss covered stone bridge in a lush green forest. Two versions of the photo are presented to show the effect of adding a photo filter`,",
  },
  {
    title: "Fanny",
    author: "Jane Austen",
    before: { imageUrl: fannyBefore.src },
    after: { imageUrl: fannyAfter.src },
    quote: `"The family of Dashwood had long been settled in Sussex."`,
    quotefrom: "Sense and Sensibility",
    alt: "A photograph of a young women in a pretty white dress sitting at a window, looking out.Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Highbury",
    author: "Jane Austen",
    before: { imageUrl: highburyBefore.src },
    after: { imageUrl: highburyAfter.src },
    quote: `"quoty quoty quoty"`,
    quotefrom: "Sense and Sensibility",
    alt: `"A photo of two men and a woman in white look pensively out at the viewer, as if they are in a dream or a trance. Two versions of the photo are presented to show the effect of adding a photo filter."`,
  },
  {
    title: "Longbourn",
    author: "Jane Austen",
    before: { imageUrl: longbournBefore.src },
    after: { imageUrl: longbournAfter.src },
    quote: `"The family of Dashwood had long been settled in Sussex."`,
    quotefrom: "Sense and Sensibility",
    alt: "A photo of an old, stately British-looking house with beautiful hedges. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Tilney",
    author: "Jane Austen",
    before: { imageUrl: tilneyBefore.src },
    after: { imageUrl: tilneyAfter.src },
    quote: `"The family of Dashwood had long been settled in Sussex."`,
    quotefrom: "Sense and Sensibility",
    alt: "A photo of a man sitting on a horse, gazing off into the distance on a gloomy day. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
];

const dickens = [
  { titleCard: dickensTitle.src, altTitleText: "Charles Dickens" },
  {
    title: "Chesney Wold",
    author: "Charles Dickens",
    before: { imageUrl: chasneyWoldBefore.src },
    after: { imageUrl: chasneyAfter.src },
    quote: `"Howls the shrill wind round Chesney Wold; the sharp rain beats, the windows rattle, and the chimneys growl."`,
    quotefrom: "Bleak House",
    alt: "A photo of a beautiful Victorian women, dressed to the nines in a dress, hair perfectly coiffed, posing for the camera. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },

  {
    title: "Dotheboys",
    author: "Charles Dickens",
    before: { imageUrl: dotheBoysBefore.src },
    after: `"A school where boys were taken in and done for by a Mr. Squeers, a puffing, ignorant, over-bearing brute, who starved them and taught them nothing."`,
    quotefrom: "Nicholas Nickleby",
    alt: "A photo from a low perspective in a courtyard, looking up at a large, imposing building. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Gradgrind",
    author: "Charles Dickens",
    before: { imageUrl: gradgrindBefore.src },
    after: { imageUrl: gradgrindAfter.src },
    quote: `"A man of realities... ready to weigh and measure any parcel of human nature, and tell you exactly what it comes to."`,
    quotefrom: "Hard Times",
    alt: "A photo of a Dickensian, behatted man snarling at something off camera. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Havisham",
    author: "Charles Dickens",
    before: { imageUrl: havishamBefore.src },
    after: { imageUrl: havishamAfter.src },
    quote: `"I saw that the bride within the bridal dress had withered like the dress, and like the flowers, and had no brightness left but the brightness of her sunken eyes."`,
    quotefrom: "Great Expectations",
    alt: "An abstract photo plants and roses in relief on what appears to be metal. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Tattycoram",
    author: "Charles Dickens",
    before: { imageUrl: tattycoramBefore.src },
    after: { imageUrl: tattycoramAfter.src },
    quote: `"And this is how Tattycoram will be a greater traveller in course of time than Captain Cook."`,
    quotefrom: "Little Dorrit",
    alt: "A photo of a bebonneted young women standing in front of allée of trees, looking perhaps longingly off to the distance. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
];

const fitzgerald = [
  { titleCard: fitzgeraldTitle.src, altTitleText: "F. Scott Fitzgerald" },
  {
    title: "Gloria",
    author: "F. Scott Fitzgerald",
    before: { imageUrl: gloriaBefore.src },
    after: { imageUrl: gloriaAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Beautiful and Damned",
    alt: "A photo of a man in a suit sitting with what appears to be a flapper draped across his lap, both looking straight at camera. The scene is very dark. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Morning Side Heights",
    author: "F. Scott Fitzgerald",
    before: { imageUrl: morningSideHeightsBefore.src },
    after: { imageUrl: morningSideHeightsAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "This Side of Paradise",
    alt: "A photo what appears to be two flappers in cloche hats and coats, one with a cigarette, looking at the camera. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Rosalind",
    author: "F. Scott Fitzgerald",
    before: { imageUrl: rosalindBefore.src },
    after: { imageUrl: rosalindAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Beautiful and Damned",
    alt: "A photo of two women who seem to be aristocratic, the one in the the foreground is wearing a white shawl and smoking a long cigratte. The other woman is blurred in the backround. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Valley of Ashes",
    author: "F. Scott Fitzgerald",
    before: { imageUrl: valleyOfAshesBefore.src },
    after: { imageUrl: valleyOfAshesAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Great Gatsby",
    alt: "A photo of an old car from what appears to be the 1920s, with classic headlights and whitewall tires, parked in a grassy field. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "West Egg",
    author: "F. Scott Fitzgerald",
    before: { imageUrl: westEggBefore.src },
    after: { imageUrl: westEggAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Great Gatsby",
    alt: "A photo of a large, ostentatious mansion with a large fountain in front. A hedge lined leads to the front door, providing a perspective that makes the mansion seem even bigger than it is. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
];
const poe = [
  { titleCard: poeTitle.src, altTitleText: "Edgar Allan Poe" },
  {
    title: "Dupin",
    author: "Edgar Allan Poe",
    before: { imageUrl: dupinBefore.src },
    after: { imageUrl: dupinAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Murders in the Rue Morgue",
    alt: "A photo of an appropriately Poe inspired man with a beard and long flowing locks, head turned down and hand on his temple. He wears a heavy cloak and a cravat, both black, and his mood is equally dark. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Ligeia",
    author: "Edgar Allan Poe",
    before: { imageUrl: ligeiaBefore.src },
    after: { imageUrl: ligeiaAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "Ligeia",
    alt: "A photo of a woman, perhaps a young woman, in a silk white dress and long dark hair. Though her face cannot be seen, the rest of her is illuminated by the candle she holds, no doubt to drive out the darkness that closes in around her. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Prospero",
    author: "Edgar Allan Poe",
    before: { imageUrl: prosperoBefore.src },
    after: { imageUrl: prosperoAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Masque of the Red Death",
    alt: "A photo of a plague doctor, standing erect in the foreground, looking off to the distance with a look that we cannot know but for his iconic beaked mask. Three nurses in the backround tend to sick undoubtedly approaching a grim demise. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Roderick Usher",
    author: "Edgar Allan Poe",
    before: { imageUrl: roderickBefore.src },
    after: { imageUrl: roderickAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "The Fall of the House of Usher",
    alt: "A photo of a dark, spooky mansion in the distance, obscured by a sickly green fog and darkness. Skeletal, leafless trees in the foreground give us perspective and enhanced spook. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
  {
    title: "Ulelume",
    author: "Edgar Allan Poe",
    before: { imageUrl: ulelumeBefore.src },
    after: { imageUrl: ulelumeAfter.src },
    quote: `"quoty quoty"`,
    quotefrom: "Ulalume",
    alt: "A photo of beautiful roses strewn across the whole frame. A dark pall falls over these brilliant flowers, as if they brood for a tragic, romantic story that perhaps it's subjects cannot tell. Two versions of the photo are presented to show the effect of adding a photo filter.",
  },
];

// Collections
const collections = {
  ["literary-1"]: [...austen, ...dickens, ...fitzgerald, ...poe],
};

export { austen, dickens, fitzgerald, poe };
