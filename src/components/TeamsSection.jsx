import React from 'react'
import "./TeamSection.css";
import Carousel from 'react-elastic-carousel';
const breakPoints = [
  {width: 4000, itemsToShow: 1 },
  {width: 768, itemsToShow: 1},
  {width: 500, itemsToShow: 3}

];


const TeamsSection = () => {
  return (
    <div class="responsive-container-block outer-container">
    <div class="responsive-container-block inner-container">
      <p class="text-blk heading-text">
        Our Team
      </p>
      <p class="text-blk sub-heading-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      <div class="responsive-container-block cards-container">
      <Carousel  breakPoints={breakPoints} pagination={true} showArrows={false} enableAutoPlay={true}>
         <div class="responsive-cell-block  wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors2.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
        </div>
        </div>
        <div class="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
        </div>
        </div>
        <div class="responsive-cell-block  wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors1.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
          </div>
        </div>
        <div class="responsive-cell-block  wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors2.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
          </div>
        </div>
        <div class="responsive-cell-block  wk-desk-4 wk-ipadp-4 wk-mobile-12 wk-tab-12 card-container">
          <p class="text-blk name">
            Maxwell Doe
          </p>
          <p class="text-blk position">
            Instructor
          </p>
          <img class="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg" />
          <div class="icon-position">
          <a href="https://www.twitter.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="social-media-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
          </a>
          </div>
        </div>
        </Carousel>
      </div>
      
    </div>
  </div>
  )
}

export default TeamsSection