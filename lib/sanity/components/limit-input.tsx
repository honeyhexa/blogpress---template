/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { Card, CardTone, Inline, Stack, Text, TextArea, TextInput } from '@sanity/ui';
import { set, unset } from 'sanity';

const getToneFromLength = (length: number, limit: number = 70): CardTone => {
  let tone = length < limit * 0.15 ? 'critical' : 'caution';
  tone = length < limit * 0.35 ? tone : 'primary';
  tone = length > limit * 0.85 ? 'caution' : tone;
  tone = length > limit ? 'critical' : tone;
  return tone as CardTone;
};

export function LimitStringInput(props: any) {
  const { elementProps, onChange, value = '', limit = 70 } = props;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange],
  );

  const tone = getToneFromLength(value.length, limit);

  const text = `${value.length} / ${limit}`;

  return (
    <Stack space={2}>
      <Inline space={[3, 3, 4, 5]}>
        <Card padding={1} radius={2} tone={tone} border>
          <Text size={1} weight="semibold">
            {text}
          </Text>
        </Card>
      </Inline>
      {props?.schemaType?.rows ? (
        <TextArea
          {...elementProps}
          rows={props?.schemaType?.rows}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <TextInput {...elementProps} onChange={handleChange} value={value} />
      )}
    </Stack>
  );
}
