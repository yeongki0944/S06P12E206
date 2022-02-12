<template>
  <!--Bonus Page Elements start -->
  <div class="container">
    <client-only>
      <Table />
      <!-- <Typography />
      <SpanPara />
      <Images />
      <Fonts />
      <LabelFonts />
      <Badge />
      <BadgeWithIcons />
      <BadgeWithSamllLabelIcon />
      <BadgeWithTypography />
      <BadgeWithStatus />
      <BackGroundColor />
      <ButtonBackground />
      <Icons />
      <ThemeButtons />
      <MessageBox />
      <MainChat />
      <SharedDoc />
      <PhoneButton />
      <Buttons /> -->
      <Reserve />
      <ForEmptySpace />
    </client-only>
  </div>
  <!--Bonus Page Elements end -->
</template>

<script>
import Typography from "./typography.vue";
import SpanPara from "./span-parag.vue";
import Images from "./images.vue";
import Fonts from "./fonts.vue";
import LabelFonts from "./label-fonts.vue";
import Badge from "./badge.vue";
import BadgeWithIcons from "./badgeWithIcons.vue";
import BadgeWithSamllLabelIcon from "./badgeWithSmallLabelIcon.vue";
import BadgeWithTypography from "./badgeWithTypography.vue";
import BadgeWithStatus from "./badgeWithstatus.vue";
import BackGroundColor from "./backgroundcolor.vue";
import ButtonBackground from "./buttonbackground.vue";
import Icons from "./icons.vue";
import ThemeButtons from "./themebuttons.vue";
import MessageBox from "./messageBox.vue";
import MainChat from "./mainChat.vue";
import SharedDoc from "./sharedDoc.vue";
import PhoneButton from "./phoneButton.vue";
import Buttons from "./buttons.vue";

import Table from "./table.vue";
import Reserve from "./reserve.vue";
import ForEmptySpace from "./ForEmptySpace.vue";

export default {
  components: {
    Typography,
    SpanPara,
    Images,
    Fonts,
    LabelFonts,
    Badge,
    BadgeWithIcons,
    BadgeWithSamllLabelIcon,
    BadgeWithTypography,
    BadgeWithStatus,
    BackGroundColor,
    ButtonBackground,
    Icons,
    ThemeButtons,
    MessageBox,
    MainChat,
    SharedDoc,
    PhoneButton,
    Buttons,
    Table,
    ForEmptySpace,
    Reserve,
  },
};
</script>
