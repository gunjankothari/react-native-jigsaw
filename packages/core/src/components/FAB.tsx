import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  PressableProps,
  Platform,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import {
  COMPONENT_TYPES,
  createIconProp,
  createColorProp,
  GROUPS,
  createBoolProp,
  createIconSizeProp,
  createActionProp,
  Triggers,
} from "@draftbit/types";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  iconName?: string;
  onPress: () => void;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
} & PressableProps &
  IconSlot;

const FAB: React.FC<Props> = ({
  onPress,
  disabled,
  loading,
  iconName = "MaterialIcons/add",
  style,
  theme,
  iconColor,
  bgColor,
  size = 50,
  Icon,
  ...props
}) => {
  const backgroundColor = bgColor || theme.colors.primary;
  const color = iconColor || "#FFF";

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        disabled={loading || disabled}
        android_ripple={{
          color: "#333",
          radius: size / 4,
        }}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              opacity: pressed || disabled ? 0.75 : 1,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor,
            },
          ];
        }}
        {...props}
      >
        <View>
          {loading ? (
            <ActivityIndicator size="small" color={color} />
          ) : (
            <Icon name={iconName} size={28} color={color} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5a45ff",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
});

export default withTheme(FAB);

export const SEED_DATA = {
  name: "FAB",
  tag: "FAB",
  category: COMPONENT_TYPES.button,
  description: "A mini round icon FAB",
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    disabled: createBoolProp({
      label: "Disabled",
      group: GROUPS.basic,
    }),
    loading: createBoolProp({
      label: "Loading",
      group: GROUPS.basic,
    }),
    iconName: createIconProp({
      label: "Icon",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    iconColor: createColorProp({
      label: "Icon color",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    bgColor: createColorProp({
      label: "Background color",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    iconSize: createIconSizeProp(),
  },
};
