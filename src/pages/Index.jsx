import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: 199,
    category: "Wearables",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">Electronics Store</Heading>
        <FaShoppingCart size="24px" />
      </Flex>

      <Input
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearchChange}
        mb={4}
      />

      <Select placeholder="Select category" value={selectedCategory} onChange={handleCategoryChange} mb={4}>
        <option value="Electronics">Electronics</option>
        <option value="Wearables">Wearables</option>
      </Select>

      <Box mb={8}>
        <Text mb={2}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
        <Slider
          aria-label="price-range-slider"
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          step={10}
          onChange={handlePriceChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6} index={0} />
          <SliderThumb boxSize={6} index={1} />
        </Slider>
      </Box>

      <VStack spacing={4} align="stretch" mb={8}>
        <Heading as="h2" size="md">Featured Products</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={8}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading as="h3" size="sm" mb={2}>{product.name}</Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold">${product.price}</Text>
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