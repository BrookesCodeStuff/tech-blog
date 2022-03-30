const { Post } = require("../models");

const postdata = [
  {
    title:
      "Litter kitter kitty litty little kitten big roar roar feed me terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry ",
    content:
      "Why can't i catch that stupid red dot cattt catt cattty cat being a cat, and snob you for another person and meow to be let out and hiss at vacuum cleaner. Chase little red dot someday it will be mine!. Instantly break out into full speed gallop across the house for no reason bite off human's toes so give me some of your food give me some of your food give me some of your food meh, i don't want it meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i donâ€™t know i canâ€™t count ptracy.",
    user_id: "2",
  },
  {
    title: "Flop over",
    content:
      "Meowing non stop for food enslave the hooman mew but hunt anything that moves, i see a bird i stare at it i meow at it i do a wiggle come here birdy but why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed i dreamt about fish yum!",
    user_id: "1",
  },
  {
    title: "Cereal boxes make for five star accommodation",
    content:
      "Find empty spot in cupboard and sleep all day. Kitty time snob you for another person, trip owner up in kitchen i want food for claw at curtains stretch and yawn nibble on tuna ignore human bite human hand somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. Sleep everywhere, but not in my bed lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back.",
    user_id: "3",
  },
];

const postSeeds = () => Post.bulkCreate(postdata);

module.exports = postSeeds;
