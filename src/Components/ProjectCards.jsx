import {
  Heading,
  Image,
  Link,
  Text,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { ProjectButton } from "./MyButton";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

// Project card function
export const ProjectCards = ({
  title,
  imgUrl,
  githubUrl,
  deployedUrl,
  description,
  techs,
}) => {
  return (
    <>
      <Card maxW="sm" m="auto" color="whiteAlpha.700" boxShadow="dark-lg">
        {/* Image, description */}
        <CardBody>
          <Image
            src={imgUrl}
            alt={title}
            borderRadius="lg"
            w="100%"
            h="200px"
          />

          <Stack mt="6" spacing="3">
            <Heading as="h4" size="md">
              {title} Clone
            </Heading>
            <Heading size="md">Description</Heading>
            <Text textAlign="justify">
              {description} <br /> Techs Used : {techs}
            </Text>
          </Stack>
        </CardBody>

        <Divider />

        {/* Buttons */}
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link
              href={`${githubUrl}`}
              target="_blank"
              w="100%"
              _hover={{ textDecoration: "none" }}
            >
              <ProjectButton text="Github" btnIcon={<BsGithub />}>
                Git
              </ProjectButton>
            </Link>
            <Link
              href={`${deployedUrl}`}
              target="_blank"
              w="100%"
              _hover={{ textDecoration: "none" }}
            >
              <ProjectButton text="Live" btnIcon={<GrDeploy />}>
                Live
              </ProjectButton>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

// Previous Cards Code

// const ProjectCards = (props) => {
//   const { imgUrl, title, githubUrl, deployedUrl, description, techs } = props;

//   return (
//     <Box
//       border="1px solid none"
//       boxShadow="dark-lg"
//       p={{ base: "6", sm: "6", md: "6", lg: "6" }}
//       rounded="md"
//       bg="#6B728E"
//       color="white"
//     >
//       <Flex direction="column" justifyContent="center" alignItems="center">
//         <Image
//           src={imgUrl}
//           alt={title}
//           w="100%"
//           h={{ base: "140px", sm: "200px", md: "150px", lg: "230px" }}
//         />

//         <Heading as="h4" size="md">
//           {title} Clone
//         </Heading>
//         <Text textAlign="justify">
//           {description} <br /> Techs Used : {techs}
//         </Text>
//         {/* <Text textAlign="justify">Techs Used : {techs}</Text> */}
//         <Link
//           href={`${githubUrl}`}
//           target="_blank"
//           w="100%"
//           _hover={{ textDecoration: "none" }}
//         >
//           <ProjectButton text="Github" btnIcon={<BsGithub />}>
//             Git
//           </ProjectButton>
//         </Link>
//         <Link
//           href={`${deployedUrl}`}
//           target="_blank"
//           w="100%"
//           _hover={{ textDecoration: "none" }}
//         >
//           <ProjectButton text="Live" btnIcon={<GrDeploy />}>
//             Live
//           </ProjectButton>
//         </Link>
//       </Flex>
//     </Box>
//   );
// };

// export default ProjectCards;
