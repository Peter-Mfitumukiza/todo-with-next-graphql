"use client";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Switch } from "@radix-ui/themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(true);
  return (
    <Theme appearance={isDark ? "dark" : "light"}>
      {children}
      <Flex style={{ marginTop: "-42px", marginLeft: "32px" }}>
        <Text size="2">
          <label>
            <Switch
              mr="2"
              size="1"
              checked={isDark}
              onCheckedChange={() => setIsDark(!isDark)}
            />{" "}
            Night Mode{" "}
          </label>
        </Text>
      </Flex>
    </Theme>
  );
}
