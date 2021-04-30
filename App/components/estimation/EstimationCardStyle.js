import { theme } from "../../infrastructure/theme/index";

export const CardStyle = {
  "cardStyle": {
    height: theme.sizes.card_height.small,
  },
  "cardStyle--default": {
    flexBasis: "40%",
    justifyContent: "center",
    margin: 8
  },
  "cardStyle--selected": {
    height: theme.sizes.card_height.medium,
    margin: 0,
    flexBasis: "100%",
  },
  "cardStyle--large": {
    height: 600,
    flexBasis: "100%",
  },

  "linearGradient": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  },
  "linearGradient--selected": {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },

  "cardText": {
    textAlign: "center",
    textAlignVertical: "center",
    color: theme.colors.card.white,
    fontFamily: theme.fonts.card,
    fontSize: theme.sizes.card_font.medium,
    flexWrap: "wrap",
  },
  "cardText--selected": {
    paddingBottom: 40,
    fontSize: theme.sizes.card_font.large,
    color: theme.colors.card.white,
    fontFamily: theme.fonts.card,
  }
};
