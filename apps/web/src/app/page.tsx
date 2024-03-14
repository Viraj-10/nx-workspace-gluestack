'use client';

import { Button, ButtonText, Box, Center } from '@gluestack-ui/themed';

export default function Home() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <main>
      <Center flex={1} $web-h="100vh">
        <Button>
          <ButtonText>Click me</ButtonText>
        </Button>
      </Center>
    </main>
  );
}
