import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">Electronics Store</Heading>
        <FaShoppingCart size="24px" />
      </Flex>

      <VStack spacing={4} align="stretch" mb={8}>
        <Heading as="h2" size="md">Featured Products</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={8}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading as="h3" size="sm" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      <Box as="footer" textAlign="center" py={4} borderTopWidth="1px">
        <Text>&copy; 2023 Electronics Store. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;