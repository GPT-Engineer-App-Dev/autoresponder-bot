import { Container, Text, VStack, Box, Heading, Flex, Spacer, Button, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaRobot, FaCog, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="red.500" color="white" p={4} borderRadius="md" mb={6}>
        <Heading size="md">AutoResponder</Heading>
        <Spacer />
        <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaWhatsapp />}>WhatsApp</Button>
        <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaRobot />}>AI Integration</Button>
        <Button variant="ghost" colorScheme="whiteAlpha" leftIcon={<FaCog />}>Settings</Button>
        <Button as={Link} to="/tic-tac-toe" variant="ghost" colorScheme="whiteAlpha">Tic Tac Toe</Button>
      </Flex>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Auto-reply to WhatsApp or WA Business</Heading>
          <Text mt={4}>Automatically respond to messages on WhatsApp or WA Business with customizable responses.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Individually Customizable Responses</Heading>
          <Text mt={4}>Set up unique responses for different contacts or groups.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Many Automation Tools Included</Heading>
          <Text mt={4}>Utilize a variety of automation tools to enhance your messaging experience.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">React to All Messages When Busy</Heading>
          <Text mt={4}>Ensure no message goes unanswered when you are unavailable.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Send Replies to Specific Messages</Heading>
          <Text mt={4}>Target specific messages with tailored responses.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Welcome Message for New Chats</Heading>
          <Text mt={4}>Greet new contacts with a personalized welcome message.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Live Answer Replacements</Heading>
          <Text mt={4}>Use dynamic placeholders like time, name, etc., in your responses.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Multiple Replies in One Rule</Heading>
          <Text mt={4}>Set up multiple responses under a single rule for more complex interactions.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Works with Contacts, Groups, and Unknown Numbers</Heading>
          <Text mt={4}>Support for messaging contacts, groups, and unknown numbers.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Ignore and Specify Contacts and Groups</Heading>
          <Text mt={4}>Choose which contacts and groups to include or exclude from auto-responses.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Automatic Scheduler with Delay</Heading>
          <Text mt={4}>Schedule messages to be sent at a later time with optional delays.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">AI Integration with ChatGPT/GPT-3/GPT-4 or Dialogflow.com</Heading>
          <Text mt={4}>Integrate with AI platforms for advanced messaging capabilities.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Backup Rules for Easy Recovery</Heading>
          <Text mt={4}>Easily backup and restore your messaging rules.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Personal Agent for Business</Heading>
          <Text mt={4}>Use the autoresponder as a personal agent for your business communications.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Auto Assign Label</Heading>
          <Text mt={4}>Automatically label numbers through the chatbot.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Auto Follow-up Prospect</Heading>
          <Text mt={4}>Automatically follow up with prospects to keep them engaged.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Bulk Messaging with Image and Video</Heading>
          <Text mt={4}>Send bulk messages that include images and videos.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Auto Send Message with Image and Video</Heading>
          <Text mt={4}>Automatically send messages with attached images and videos.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Converse: Activate Number with Automatic Warm-up</Heading>
          <Text mt={4}>Activate numbers with an automatic warm-up feature.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Support for Malay Language and 50 Other Languages</Heading>
          <Text mt={4}>Communicate in Malay and 50 other supported languages.</Text>
        </Box>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => {
  return (
    <Box as="footer" bg="blue.500" color="white" py={4} mt={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">Contact Us</Text>
            <Text>Email: contact@autoresponder.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </Box>
          <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
            <Flex justify={{ base: "center", md: "flex-start" }} mt={2}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} variant="ghost" colorScheme="whiteAlpha" mx={1} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} variant="ghost" colorScheme="whiteAlpha" mx={1} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} variant="ghost" colorScheme="whiteAlpha" mx={1} />
              <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" colorScheme="whiteAlpha" mx={1} />
            </Flex>
          </Box>
          <Box textAlign={{ base: "center", md: "right" }}>
            <Text>&copy; {new Date().getFullYear()} AutoResponder. All rights reserved.</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;