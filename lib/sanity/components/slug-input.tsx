/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card, Flex, Button, Text, ToastProvider, useToast, Stack, Badge } from '@sanity/ui';
import { MdCopyAll, MdOpenInNew } from 'react-icons/md';

const PROD_DOMAIN = process.env.NEXT_PUBLIC_PROD_DOMAIN || 'https://honeyhexa.com';
const TEST_DOMAIN = process.env.NEXT_PUBLIC_TEST_DOMAIN || 'https://test.honeyhexa.com';

function copyToClipboard(toast: any) {
  return (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // You can show a success message or perform any additional actions here
        toast.push({
          status: 'success',
          title: 'URL Copied!',
        });
      })
      .catch((error) => {
        // You can show an error message or handle the error gracefully here
        toast.push({
          status: 'error',
          title: 'Something went wrong!',
        });
      });
  };
}

function openInNewTab(url: string) {
  (window as any).open(url, '_blank').focus();
}

export function SlugInput(props: any) {
  const { route = '' } = props;
  const toast = useToast();
  return (
    <ToastProvider>
      <Stack space={2}>
        <Flex align="center">
          <Text size={2} style={{ fontFamily: 'monospace' }}>
            devrev.ai
            {route}
          </Text>
          <Card flex={1}>{props.renderDefault(props)}</Card>
        </Flex>
        <Flex gap={[1, 1, 2, 7]} justify="space-between">
          <Flex align="center" flex={1} justify="space-between">
            <Flex align="center" gap={[1, 1, 2, 3]}>
              🔴
              <Badge tone="critical">PRODUCTION</Badge>
            </Flex>
            <Flex align="center" gap={[1, 1, 2, 3]}>
              <Button
                fontSize={[1, 1, 2]}
                mode="ghost"
                icon={MdCopyAll}
                padding={[1, 2, 3]}
                onClick={() => copyToClipboard(toast)(`${PROD_DOMAIN}${route}${props?.value?.current}`)}
              />
              <Button
                fontSize={[1, 1, 2]}
                mode="ghost"
                icon={MdOpenInNew}
                padding={[1, 2, 3]}
                onClick={() => openInNewTab(`${PROD_DOMAIN}${route}${props?.value?.current}`)}
              />
            </Flex>
          </Flex>
          <Flex align="center" flex={1} justify="space-between">
            <Flex align="center" gap={[1, 1, 2, 3]}>
              🔵
              <Badge tone="primary">DEVELOPMENT</Badge>
            </Flex>
            <Flex align="center" gap={[1, 1, 2, 3]}>
              <Button
                fontSize={[1, 1, 2]}
                mode="ghost"
                icon={MdCopyAll}
                padding={[1, 2, 3]}
                onClick={() => copyToClipboard(toast)(
                  `${TEST_DOMAIN}${route}${props?.value?.current}`,
                )}
              />
              <Button
                fontSize={[1, 1, 2]}
                mode="ghost"
                icon={MdOpenInNew}
                padding={[1, 2, 3]}
                onClick={() => openInNewTab(`${TEST_DOMAIN}${route}${props?.value?.current}`)}
              />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </ToastProvider>
  );
}
