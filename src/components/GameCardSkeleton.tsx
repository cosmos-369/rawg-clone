import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px">
      <CardBody borderRadius="10px">
        <Skeleton borderRadius="10px" height="200px"></Skeleton>
        <SkeletonText marginY="20px"></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
