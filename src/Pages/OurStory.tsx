import React from "react";
import VFAvatar from "../Assets/VFAvatar.png";
import { Box, Avatar, Text, VStack, Heading } from "@chakra-ui/react";

const OurStory = () => {
  return (
    <Box w="full" minH="90vh" display="flex" justifyContent="center" p="40px" pb="60px" bgColor="#f7f1e3">
      <VStack w="full">
        <Avatar size="2xl" mt="20px" src={VFAvatar} />
        <Text color="gray.500">Josiah Taylor - Founder</Text>
        <VStack w={{ base: "100%", lg: "1000px" }} pt="20px">
          <Heading w="full" pt="40px" fontFamily="dm-sans-serif">
            An Unhealthy Problem
          </Heading>
          <Text>
            In this bustling digital age, where time often seems to slip through our fingers, I, a 23-year-old software engineer, found myself in a quandary shared by many.
            Balancing the demands of a burgeoning career with the need to maintain a healthy lifestyle seemed nearly impossible. The hours I devoted to coding and software
            development left little room for me to research nutritious food options, craft well-thought-out meal plans, create detailed shopping lists, and then venture out to buy
            groceries.
          </Text>
          <br />
          <Text>
            I often found myself resorting to quick fixes: grabbing fast food on the way home, ordering takeout, or even skipping meals altogether. But I knew this wasn't
            sustainable, nor was it the healthy lifestyle I wanted.
          </Text>
          <br />
          <Text>
            The solution, it seemed, might lie in meal subscription services. However, after exploring several options, I realized these services did not solve the problem I had.
            While convenient, they lacked the flexibility, custumization, and the clarity of ingredients I was looking for. The meals were often set in stone, with little room for
            customization based on dietary needs, preferences, or whims. I wanted a meal that suited my exact needs, not a one-size-fits-all approach that many subscriptions
            offered.
          </Text>
          <br />
          <Heading w="full" pt="40px" fontFamily="dm-sans-serif">
            A Vibey Solution
          </Heading>
          <Text>
            That's when the idea struck me. What if I could leverage my skills as a software engineer to create a solution that catered to people like me? People who desired
            flexibility, affordability, and convenience in planning their meals.
          </Text>
          <br />
          <Text>
            And so, after many late nights, countless iterations, and a passion for bridging the gap between health and technology, Vibey Foods was born. A place where users could
            have the best of both worlds: the convenience of automatically generated recipes, meal plans, and shopping lists, coupled with the power to fully customize their food
            journey.
          </Text>
          <br />
          <Text>
            Vibey Foods goes beyond the standard meal planner. It understands that every individual is unique, with distinct tastes, dietary restrictions, and health goals. Whether
            you're a vegan, on a keto diet, allergic to nuts, or just someone who despises broccoli, our platform adapts to you, ensuring that your meal plans align with your
            preferences.
          </Text>
          <br />
          <Text>
            In creating this platform, I have attempted to transform my problem into an opportunity, not just for myself, but for countless others facing the same dilemma. Today,
            we're proud to say that we're not just a meal planning tool; we're a community, a movement, dedicated to making healthy living attainable and customizable for all.
          </Text>
          <br />
          <Text>Join us on this journey, and let's make every meal, every bite, tailored just for you.</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default OurStory;
