import { theme } from "../../infrastructure/theme/index";

export const CardStyle = {
  cardStyle: {
    height: theme.sizes.card_height.small,
  },
  "cardStyle--default": {
    flexBasis: "40%",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 20,
    padding: 8,
    borderRadius: 20,
  },
  "cardStyle--selected": {
    height: theme.sizes.card_height.medium,
    marginTop: 40,
    flexBasis: "90%",
  },
  itemStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    color: theme.colors.card.white,
    fontFamily: theme.fonts.card,
    fontSize: theme.sizes.card_font.medium,
    flexWrap: "wrap",
  },
  "itemStyle--selected": {
    paddingBottom: 40,
    fontSize: theme.sizes.card_font.large,
    color: theme.colors.card.white,
    fontFamily: theme.fonts.card,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: theme.sizes.card_height.small,
    width: "100%",
  },
  linearGradientSelected: {
    height: theme.sizes.card_height.medium,
  },
};
