import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <Skeleton borderRadius="10px" height="300px"></Skeleton>
        <SkeletonText marginY="20px"></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
