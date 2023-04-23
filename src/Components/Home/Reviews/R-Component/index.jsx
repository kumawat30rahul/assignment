import React from 'react'
import Heading from '../../Common/Heading'
import RSlider from '../R-Slider'
import Background from '../../Common/Background'

function Reviews() {
  const userReviews = [
    {
        avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        stars: 3,
        desc: "Asfnjadnf lajsdf jasdlfjh alskjhdfl kjasd lfjhajshdfjka sdjkfhl asjdhf iasdjf asjhdfliuahr fhasdkjhf ajhsdf lkjabsdl fjhaljhs dfjkha skjdhf ajs dfkjha lriufoidshf akjshd fjahskdjfn ajshdf lakjsd kjfh ashdfkja"
    },
    {
        avatar: 'https://i.pinimg.com/236x/c9/0c/11/c90c1196e91baf248d4a66459ebe7dc8--for-girls.jpg',
        stars: 1,
        desc: "LKASfjkas dfkaj sdkfja lsdjhflajhsdfljahsdljfakjdsfljhasdjhf ahjsdfklja skdjfkjahsdkjfh akjhdsfklajsd kfjakjhdsfkjhadsklfjh akjdshf kjahsdfkj haksjdhf kajsh df ljahsdfkjhasdfhkjashdfkjhasdfkjhasdkfjh kjsdhfkja"
    },
    {
        avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        stars: 4,
        desc: "uiojgh dfg gf s sgfdualkd faujdfnmawet ath tjjkdsfa kjdshf ajhsdfj hailufh akjdhsf ajhdfiha sdfh akjsdhf kjahdfi uahsdfkj hakjdshfljahdsf liauweri ahf jkadf kajdsnfjbvaj"
    },
    {
        avatar: 'https://i.pinimg.com/originals/a7/d0/15/a7d015886dffb28b81b40156ae1d6fad.jpg',
        stars: 5,
        desc: "asdfasdf adg254 ujkgig hjdfj hailufh akjdhsf ajhdfiha sdfh akjsdhf kjahdfi uahsdfkj hakjdshfljahdsf liauweri ahf jkadf kajdsnfjbvaj"
    },
    {
        avatar: 'https://cdllife.com/wp-content/uploads/2022/12/302694004_383932083909042_6195487793296063186_n-696x487.jpeg',
        stars: 2,
        desc: "kilyiulk ujkghjkgk guykghjlkd faujdfnmawet ath tjjkdsfa kjdshf ajhsdfj hailufh akjdhsf ajhdfiha sdfh akjsdhf kjahdfi uahsdfkj hakjdshfljahdsf liauweri ahf jkadf kajdsnfjbvaj"
    },
]
  return (
    <Background>
      <div className="reviews-wrapper">
        <div className='review-heading'>
          <Heading headingTitle="User Reviews" />
        </div>
        <RSlider userReviews={userReviews}/>
      </div>
    </Background>
  )
}

export default Reviews
