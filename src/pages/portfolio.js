import React, { Component } from "react"
import Masonry from "react-masonry-css"
import { Style } from "react-style-tag"
import Modal from "../components/Modal"
import styled from "styled-components";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const elements = [
  { src: "https://i.pinimg.com/564x/fd/19/aa/fd19aa8c269c4442110580d252075a80.jpg" },
  { src: "https://i.pinimg.com/564x/f9/1d/51/f91d51eb288d40a452c1c4ce0ef7ee0a.jpg" },
  { src: "https://i.pinimg.com/564x/ef/9e/a9/ef9ea9264e63984b0d02151850d96cc0.jpg" },
  { src: "https://i.pinimg.com/564x/0f/5b/ba/0f5bbae5d5129428f7e67370d8ac4259.jpg" },
  { src: "https://i.pinimg.com/564x/12/11/67/121167083a18f8a1107135d0bce8dee4.jpg" },
  { src: "https://i.pinimg.com/564x/45/d7/e6/45d7e6dfacb1c9feaadcb80d9e18c4da.jpg" },
  { src: "https://i.pinimg.com/564x/2a/ca/01/2aca01b6c3d8616ca817481a641dd9f7.jpg" },
  { src: "https://i.pinimg.com/564x/9b/e5/eb/9be5eb0eb807c1abb412b10e87af7102.jpg" },
  { src: "https://i.pinimg.com/564x/f5/ef/ff/f5efff1fc2e6ea8c400709a4194f130e.jpg" },
  { src: "https://i.pinimg.com/564x/be/53/73/be537356e65cbfa53b0fcd3a890b2387.jpg" },
  { src: "https://i.pinimg.com/564x/2d/70/09/2d700962e9d2d75461ed902e7a98c58a.jpg" },
  { src: "https://i.pinimg.com/564x/38/ba/0e/38ba0e3a70bd6247cb85ddcba90631d3.jpg" },
  { src: "https://i.pinimg.com/564x/90/b5/ca/90b5ca5c46e001832c5d61eed390f3b2.jpg" },
  { src: "https://i.pinimg.com/564x/f3/64/77/f3647773c7ecd54798203976ef6ebb4b.jpg" },
  { src: "https://i.pinimg.com/564x/28/d3/ce/28d3ce57f2c6f56db0170eabae28cb17.jpg" },
  { src: "https://i.pinimg.com/564x/61/16/f7/6116f7321c905d34a63c2101ee03fb8b.jpg" },
  { src: "https://i.pinimg.com/564x/3f/b8/d5/3fb8d54c536198899e7f87743d474c48.jpg" },
  { src: "https://i.pinimg.com/564x/a8/05/25/a80525844c475bba882940c138e59b55.jpg" },
  { src: "https://i.pinimg.com/564x/9c/5f/90/9c5f90eb28eb1bbfc867f9575fd55fe7.jpg" },
  { src: "https://i.pinimg.com/564x/e8/39/8b/e8398b2f856ca38acd3c5b3ef831e9d5.jpg" },
  { src: "https://i.pinimg.com/564x/b3/ac/aa/b3acaa41a78aa2833d36286a3774387a.jpg" },
  { src: "https://i.pinimg.com/564x/72/c4/a4/72c4a4964fa6a440e8ff84cddd6a424e.jpg" },
  { src: "https://i.pinimg.com/564x/45/68/46/456846d50729a171ec9c3da055e2806a.jpg" },
  { src: "https://i.pinimg.com/564x/7b/31/03/7b31039e328e1f0bd9a0d9ad51e049d2.jpg" },
  { src: "https://i.pinimg.com/564x/c6/65/d9/c665d95cb26593f7e2f248d3cff550b1.jpg" },
  { src: "https://i.pinimg.com/564x/7a/d2/10/7ad2105e7ff21e3eb9a8b4065bd65ddc.jpg" },
  { src: "https://i.pinimg.com/564x/f0/d3/f7/f0d3f70c7d242f1a10adb695940250a9.jpg" },
  { src: "https://i.pinimg.com/564x/31/bc/39/31bc39243e425c5f4b0df570e9565658.jpg" },
  { src: "https://i.pinimg.com/564x/e1/c5/6a/e1c56a35610b8f1feb739ef0d2a82b4b.jpg" },
  { src: "https://i.pinimg.com/564x/8c/66/d7/8c66d78052d1d29c734b25f51d0f9385.jpg" },
  { src: "https://i.pinimg.com/564x/17/03/56/1703563628fb897694e81c2ae8d12e4e.jpg" },
  { src: "https://i.pinimg.com/564x/51/1b/b4/511bb472e5265d7d97cb767e46b7accd.jpg" },
  { src: "https://i.pinimg.com/564x/94/62/ea/9462eac9a9541f196f1007106cfdf25f.jpg" },
  { src: "https://i.pinimg.com/564x/eb/f5/38/ebf5386370c5801ad2762ec146ed2806.jpg" },
  { src: "https://i.pinimg.com/564x/80/2b/cf/802bcf80d17b16005325038b8e6a00d2.jpg" },
  { src: "https://i.pinimg.com/564x/5a/c0/5e/5ac05e2c3293ef8ae45ed38cfa3db7e1.jpg" },
  { src: "https://i.pinimg.com/564x/0e/76/e8/0e76e8b424e59f87a0f94394561a7b07.jpg" },
  { src: "https://i.pinimg.com/564x/10/ee/88/10ee886d8177f64fb54db3330503cd15.jpg" },
  { src: "https://i.pinimg.com/564x/17/77/11/17771128a4c1eb6e171a13cbd081e462.jpg" },
  { src: "https://i.pinimg.com/564x/4c/bc/bb/4cbcbbb8f409937dc30bf436332fcb87.jpg" },
  { src: "https://i.pinimg.com/564x/48/18/7f/48187f926b216818d0896247e353e87b.jpg" },
  { src: "https://i.pinimg.com/564x/6e/72/dd/6e72dd5e9bfba2406caa70d5ba727516.jpg" },
  { src: "https://i.pinimg.com/564x/cc/7b/69/cc7b698e8ad31167032d81c99e22fbf9.jpg" },
  { src: "https://i.pinimg.com/564x/cc/70/b2/cc70b20e4a7766002498b652ae9c7e7d.jpg" },
  { src: "https://i.pinimg.com/564x/7c/9c/5e/7c9c5e3e8bb9dd2aff95742ebee5afdb.jpg" },
  { src: "https://i.pinimg.com/564x/3e/04/6b/3e046b4d9154ac7b6f96410e6e846454.jpg" },
  { src: "https://i.pinimg.com/564x/35/18/ca/3518caf2de4b8eae124d14a8ce7cbcbe.jpg" },
  { src: "https://i.pinimg.com/564x/da/43/85/da43853573f56dd0b1214f4ca0204ae9.jpg" },
  { src: "https://i.pinimg.com/564x/a2/77/ad/a277adcb83adc3dd784454a34c6ec814.jpg" },
  { src: "https://i.pinimg.com/564x/47/15/3d/47153d7107bc79735f5586afee98ca76.jpg" },
  { src: "https://i.pinimg.com/564x/46/1e/e8/461ee8a13e536120745e560dcec3ef05.jpg" },
  { src: "https://i.pinimg.com/564x/80/7b/9f/807b9ff7b2c1514ee0f43ef8479e4578.jpg" },
  { src: "https://i.pinimg.com/564x/08/7b/9c/087b9cc6740b773e27a798fa11c044ed.jpg" },
  { src: "https://i.pinimg.com/564x/66/8c/d4/668cd46d6c1cba79afa7a34a5f4df5f5.jpg" },
  { src: "https://i.pinimg.com/564x/9c/bd/25/9cbd25d1c93ca9fa10de4d735c5b053a.jpg" },
  { src: "https://i.pinimg.com/564x/da/01/11/da01113e42706ee9d69619305b6ee013.jpg" },
  { src: "https://i.pinimg.com/564x/7b/19/c0/7b19c0599a6c83b17645af85eb7c0900.jpg" },
  { src: "https://i.pinimg.com/564x/99/ab/f9/99abf98054e0035f301cd8bcd5598561.jpg" },
  { src: "https://i.pinimg.com/564x/c8/7d/41/c87d419ce8c4e2c77d8e7e387715583d.jpg" },
  { src: "https://i.pinimg.com/564x/79/2d/b6/792db61beecacc787105ebe05c42afbb.jpg" },
  { src: "https://i.pinimg.com/564x/8f/4b/80/8f4b8020eb13f19917b4812f1fce6ce5.jpg" },
  { src: "https://i.pinimg.com/564x/c4/91/fa/c491fa5e3d67ddf32e13e0727c136d46.jpg" },
  { src: "https://i.pinimg.com/564x/f1/78/c5/f178c50e8f2db8f66eea584055c2ef5c.jpg" },
  { src: "https://i.pinimg.com/564x/57/ec/1f/57ec1f82a75f59d9ca2b2a5e54fdabea.jpg" },
  { src: "https://i.pinimg.com/564x/b4/4d/cf/b44dcfa72ac233df501d6d648fea5efb.jpg" },
  { src: "https://i.pinimg.com/564x/fa/d3/a0/fad3a088bb086b412fe6c3c5b7bc67d8.jpg" },
  { src: "https://i.pinimg.com/564x/77/84/db/7784dbd3348864b4604c4be5ab7d1c5a.jpg" },
  { src: "https://i.pinimg.com/564x/ea/96/3f/ea963f47f6ebd44138edfe399b5a6b46.jpg" },
  { src: "https://i.pinimg.com/564x/11/b8/19/11b819f2db92d69b4228f030c8525f71.jpg" },
  { src: "https://i.pinimg.com/564x/a0/2a/32/a02a320819124a42ece351d0aedb2f2c.jpg" },
  { src: "https://i.pinimg.com/564x/bc/4b/60/bc4b60633b67473fee7cf274ebbda5d2.jpg" },
  { src: "https://i.pinimg.com/564x/bf/d1/68/bfd168ea2e005b7971ba5873bd195f3d.jpg" },
  { src: "https://i.pinimg.com/564x/cc/ee/ac/cceeaceacde51a74bbdd64f7c8e7ebb9.jpg" },
  { src: "https://i.pinimg.com/564x/2e/f3/00/2ef300faf13bdbf5813deb3a13a5b114.jpg" },
  { src: "https://i.pinimg.com/564x/3c/21/c3/3c21c311f67c6cd9fe67e1da00fd8abb.jpg" },
  { src: "https://i.pinimg.com/564x/e9/7e/89/e97e8913d5dc01b4a22af47aff570a54.jpg" },
  { src: "https://i.pinimg.com/564x/92/81/99/928199af3bce1261ab07e1a2259b09f1.jpg" },
  { src: "https://i.pinimg.com/564x/61/0f/00/610f005fe589a47307b88b103b6df2ed.jpg" },
  { src: "https://i.pinimg.com/564x/f4/69/64/f46964b93ad5ee90e46f1c35a06658d4.jpg" },
  { src: "https://i.pinimg.com/564x/7a/9a/4d/7a9a4d35d53f1bc948c2e087af57d175.jpg" },
  { src: "https://i.pinimg.com/564x/c0/df/1d/c0df1d8220dcb38bb1a8f28ee9631cbb.jpg" },
  { src: "https://i.pinimg.com/564x/1b/9e/17/1b9e179e41e13445b8d0bcc337dd1bff.jpg" },
  { src: "https://i.pinimg.com/564x/36/b8/f6/36b8f6c6f24b7bcbcdd72a14bb0c3c85.jpg" },
  { src: "https://i.pinimg.com/564x/cb/c3/b2/cbc3b2f116364c837acee38d807e94f2.jpg" },
  { src: "https://i.pinimg.com/564x/cf/09/71/cf0971143276a9254e5071e1afcf97ab.jpg" },
  { src: "https://i.pinimg.com/564x/0b/49/67/0b4967e721c2696397be370a55bae968.jpg" },
  { src: "https://i.pinimg.com/564x/d3/d8/2a/d3d82a695bb854d3d4bd26f0dd84b6dd.jpg" },
  { src: "https://i.pinimg.com/564x/eb/17/31/eb17317682e62549b9c2928b1afd8a10.jpg" },
  { src: "https://i.pinimg.com/564x/94/e3/2c/94e32c81f2b5764dc884f6c1ad0d81a2.jpg" },
  { src: "https://i.pinimg.com/564x/0d/f0/d3/0df0d3c03c662fb284f8f006d08c865d.jpg" },
  { src: "https://i.pinimg.com/564x/75/e3/a9/75e3a94f7b9ad8230f7ed301c2329272.jpg" },
  { src: "https://i.pinimg.com/564x/89/e1/fc/89e1fcaa9879e2a03c4d1c787b05fc14.jpg" },
  { src: "https://i.pinimg.com/564x/57/9e/d8/579ed87626de68d28429e03a2da95ce8.jpg" },
  { src: "https://i.pinimg.com/564x/8f/a8/5f/8fa85f89ada3947fe4684b8f2c0bb67e.jpg" },
  { src: "https://i.pinimg.com/564x/16/6a/8e/166a8e09db22b9f71bdaccdb38a56742.jpg" },
  { src: "https://i.pinimg.com/564x/c7/1a/df/c71adf1f8ce75a45e22c10edb9ff29d0.jpg" },
  { src: "https://i.pinimg.com/564x/99/43/3d/99433d4c97f746331038ff021c1bd30d.jpg" },
  { src: "https://i.pinimg.com/564x/ff/28/ae/ff28aee13b112a98664492281f8e31c8.jpg" },
  { src: "https://i.pinimg.com/564x/cf/77/de/cf77dee732f48e666d04eb257354dcbc.jpg" },
  { src: "https://i.pinimg.com/564x/cd/5d/ee/cd5dee9ddce26a1f752e165254e2cb79.jpg" },
  { src: "https://i.pinimg.com/564x/3c/96/32/3c96324aae2ab8cd350c9a6f9a29b0a6.jpg" },
  { src: "https://i.pinimg.com/564x/fb/d2/b6/fbd2b668581a084e4bbbe627d5ea6681.jpg" },
  { src: "https://i.pinimg.com/564x/d8/01/ae/d801ae0fcc8d64f6c433b0b9cb888504.jpg" },
  { src: "https://i.pinimg.com/564x/1a/3e/7a/1a3e7a4cf1cbf33d1eabe3a6b7964cb2.jpg" },
  { src: "https://i.pinimg.com/564x/12/8f/50/128f50ebfd4ed16208edb16ff4d2d1a0.jpg" },
  { src: "https://i.pinimg.com/564x/4f/be/2b/4fbe2b924a0d9a8d26459c0f5e046429.jpg" },
  { src: "https://i.pinimg.com/564x/5c/c5/64/5cc564f625c0708b6c9c7922cc8f2b62.jpg" },
  { src: "https://i.pinimg.com/564x/b0/80/35/b08035b29f7267fc47bb53bbd2867eb7.jpg" },
  { src: "https://i.pinimg.com/564x/6a/bb/43/6abb43cafb05f640ff31dada575c7063.jpg" },
  { src: "https://i.pinimg.com/564x/95/d2/a5/95d2a50a40d825e88f068266d2a54d28.jpg" },
  { src: "https://i.pinimg.com/564x/0f/ec/44/0fec447112a3f8c966df77fc3e7c2245.jpg" },
  { src: "https://i.pinimg.com/564x/71/d9/70/71d970eeb02ebbe650dde1a53441367c.jpg" },
  { src: "https://i.pinimg.com/564x/c2/91/f8/c291f86772fa3c128af8bed2951ad6fa.jpg" },
  { src: "https://i.pinimg.com/564x/b2/b3/48/b2b348f2457b7fa7a30597accab7e16b.jpg" },
  { src: "https://i.pinimg.com/564x/2a/75/ad/2a75ad6d1e1a7abe2b7df66d48d9512a.jpg" },
  { src: "https://i.pinimg.com/564x/e6/9d/ea/e69dea87335b6f62bde6e7db762e4da3.jpg" },
  { src: "https://i.pinimg.com/564x/a5/fd/e6/a5fde6518745fdc25fe851e8a11e8582.jpg" },
  { src: "https://i.pinimg.com/564x/e6/0b/bb/e60bbbdd74f680740c51bcfaeffd251b.jpg" },
  { src: "https://i.pinimg.com/564x/12/07/c0/1207c0410d3923947f2c295732891638.jpg" },
  { src: "https://i.pinimg.com/564x/4d/20/39/4d2039eb39912c247590b6113a3f33b9.jpg" },
  { src: "https://i.pinimg.com/564x/32/73/86/327386a707aade20d2e2e406ff3abd4d.jpg" },
  { src: "https://i.pinimg.com/564x/ff/7a/16/ff7a167bc503a74f2fa6b6c61f1cdcdd.jpg" },
  { src: "https://i.pinimg.com/564x/14/e8/d5/14e8d52a643bcee1207a8b0636cc0eb1.jpg" },
  { src: "https://i.pinimg.com/564x/a8/4a/7f/a84a7fdc1ee61fd751e3f8904804fd2a.jpg" },
  { src: "https://i.pinimg.com/564x/39/5e/b5/395eb5f6bf9e807a563b51b8f7e8f5fd.jpg" },
  { src: "https://i.pinimg.com/564x/9b/71/f6/9b71f693045632d8bbe2c375db5a2810.jpg" },
  { src: "https://i.pinimg.com/564x/8f/e9/13/8fe9138a1253358624fa8399c78c24ee.jpg" },
  { src: "https://i.pinimg.com/564x/97/4d/4c/974d4cbd7b3fe799a1de5eebc94e0f88.jpg" },
  { src: "https://i.pinimg.com/564x/a1/61/51/a16151a8d2753f717ba6b93d9ec5225b.jpg" },
  { src: "https://i.pinimg.com/564x/b1/4a/a3/b14aa388e47afd43afbbc4b1ff5f3c3d.jpg" },
  { src: "https://i.pinimg.com/564x/7d/66/7e/7d667ec6bce92b903fc3332e1ee0d224.jpg" },
  { src: "https://i.pinimg.com/564x/c5/f2/b1/c5f2b1c04fb825b610b6f492d1000253.jpg" },
  { src: "https://i.pinimg.com/564x/82/e0/30/82e030e051a2a6a077e55d6ef6ce42ae.jpg" },
  { src: "https://i.pinimg.com/564x/7d/8e/f8/7d8ef8ab587342d44d85f349e5868eb3.jpg" },
  { src: "https://i.pinimg.com/564x/0e/79/c8/0e79c8d8d1a603f4656fa1f7693f5c0d.jpg" },
  { src: "https://i.pinimg.com/564x/0f/6c/f5/0f6cf53cb69c25267f30f334c6c848bd.jpg" },
  { src: "https://i.pinimg.com/564x/6d/5b/10/6d5b1078c9b185de3637167fa5bfa679.jpg" },
  { src: "https://i.pinimg.com/564x/ad/bc/35/adbc354f2535c6b826e101e1793053d0.jpg" },
  { src: "https://i.pinimg.com/564x/67/0f/5c/670f5c755b8123810281c9d142da3f2d.jpg" },
  { src: "https://i.pinimg.com/564x/66/d8/77/66d877b5ac2a995c799841f49bc67aaf.jpg" },
  { src: "https://i.pinimg.com/564x/0d/67/53/0d6753dca4c6d6b1460b35d0a803d583.jpg" },
  { src: "https://i.pinimg.com/564x/1c/59/03/1c59037639605a43f762e3439b0f7e1a.jpg" },
  { src: "https://i.pinimg.com/564x/c3/50/1f/c3501f4f11c50b74f8098e5f51075690.jpg" },
  { src: "https://i.pinimg.com/564x/57/d9/8e/57d98ec451afc2141f1adc3a94aa16c1.jpg" },
  { src: "https://i.pinimg.com/564x/b8/f4/88/b8f488fdab0bfb41c437ae81576612bc.jpg" },
  { src: "https://i.pinimg.com/564x/5f/ef/fb/5feffbc058b0682d967ad99a3b98b70e.jpg" },
  { src: "https://i.pinimg.com/564x/29/9f/0e/299f0e647324c0fad36156c980944eee.jpg" },
  { src: "https://i.pinimg.com/564x/dd/69/1d/dd691d925a337142b7250ae18d653b24.jpg" },
  { src: "https://i.pinimg.com/564x/7b/b3/2a/7bb32a851e829987d6135232dc8550bb.jpg" },
  { src: "https://i.pinimg.com/564x/c4/3d/70/c43d70be39f7bb005a75e775bbe9b221.jpg" },
  { src: "https://i.pinimg.com/564x/8e/50/a7/8e50a7befa78e997578bdc903d75773c.jpg" },
  { src: "https://i.pinimg.com/564x/13/c2/0b/13c20bf16fd4d994134c230174f350e8.jpg" },
  { src: "https://i.pinimg.com/564x/00/98/44/009844e2fa5480b299e6d23edb4162ce.jpg" },
  { src: "https://i.pinimg.com/564x/f8/f4/17/f8f4176032b685f8942f717467c3de20.jpg" },
  { src: "https://i.pinimg.com/564x/1c/59/03/1c59037639605a43f762e3439b0f7e1a.jpg" },
  { src: "https://i.pinimg.com/564x/61/d0/e5/61d0e54d7513154da5fe071a3cc5ab9f.jpg" },
  { src: "https://i.pinimg.com/564x/97/ae/59/97ae5994d6cb806f2dc3bfba3cbc0e54.jpg" },
  { src: "https://i.pinimg.com/564x/29/72/90/297290365e6f034602258f90d7aac51f.jpg" },
  { src: "https://i.pinimg.com/564x/08/33/90/083390aeb13bcd52cc273e7da3ac490f.jpg" },
  { src: "https://i.pinimg.com/564x/b5/62/02/b56202023cc63a34b998d39572214850.jpg" },
  { src: "https://i.pinimg.com/564x/41/b3/b4/41b3b4ae45f5286160035173bd4df5e9.jpg" },
  { src: "https://i.pinimg.com/564x/bb/3c/13/bb3c1352a74757d0f0c10d42c41284ee.jpg" },
  { src: "https://i.pinimg.com/564x/fd/8f/71/fd8f715b28503d0d79a6fcd9d1f7620a.jpg" },
  { src: "https://i.pinimg.com/564x/3e/b8/93/3eb8935c96031b4bb501c6445cfa30d7.jpg" },
  { src: "https://i.pinimg.com/564x/75/cc/2d/75cc2daca36cf472c5ab80aa19f8d676.jpg" },
  { src: "https://i.pinimg.com/564x/45/ef/4b/45ef4b26063cd5a5e42ec45e6b190eea.jpg" },
  { src: "https://i.pinimg.com/564x/ac/32/ba/ac32baa3b18db75da1500b85073c4eca.jpg" },
  { src: "https://i.pinimg.com/564x/44/89/7a/44897a9b436cd72e1394fe4b51698b85.jpg" },
  { src: "https://i.pinimg.com/564x/26/58/97/2658973cc117728eae498f8d6fbf1a07.jpg" },
  { src: "https://i.pinimg.com/564x/24/6d/9c/246d9c45123ca2e6f96205398fd45568.jpg" },
  { src: "https://i.pinimg.com/564x/dc/75/28/dc752824990c0d8b66c45ed39ef3e81e.jpg" },
  { src: "https://i.pinimg.com/564x/07/dc/55/07dc55abe23eb0aa867f03358f0d2ea9.jpg" },
  { src: "https://i.pinimg.com/564x/ae/ae/30/aeae30c6d4cdb1cd22f6c66d599358e7.jpg" },
  { src: "https://i.pinimg.com/564x/d8/95/b4/d895b4ad157a34b1c4bbb2baa3cb5977.jpg" },
  { src: "https://i.pinimg.com/564x/f5/c8/d8/f5c8d837e3e370d50db8688b3c1547cb.jpg" },
  { src: "https://i.pinimg.com/564x/a7/87/b8/a787b8faf114047dfcb9477767107fbc.jpg" },
  { src: "https://i.pinimg.com/564x/e8/9c/f0/e89cf01def5c0eee00730978dc748227.jpg" },
  { src: "https://i.pinimg.com/564x/ae/03/e5/ae03e55f702c290bcc6f5d39d82b58fd.jpg" },
  { src: "https://i.pinimg.com/564x/52/4c/be/524cbe28d0ee41969ac7fef7a883a8ec.jpg" },
  { src: "https://i.pinimg.com/564x/2d/81/fe/2d81fecb69905310b7070bd19e9301d6.jpg" },
  { src: "https://i.pinimg.com/564x/c7/ec/95/c7ec9539aab05b888935351bbc19da7f.jpg" },
  { src: "https://i.pinimg.com/564x/d6/8a/ab/d68aabfb453e48f32d01a3bec2e5e89a.jpg" },
  { src: "https://i.pinimg.com/564x/80/80/41/808041215834a44463e18964a478b958.jpg" },
  { src: "https://i.pinimg.com/564x/4b/82/3b/4b823b6d26c4bd89d0972f6b969f859c.jpg" },
  { src: "https://i.pinimg.com/564x/f0/d8/c0/f0d8c05e8ddd1f8556813261a0dca5b0.jpg" },
  { src: "https://i.pinimg.com/564x/d7/78/b0/d778b0272b8fae874d0b0f17a55ae625.jpg" },
  { src: "https://i.pinimg.com/564x/d7/ed/9b/d7ed9b564b2d26bfa7c114e9b838cac6.jpg" },
  { src: "https://i.pinimg.com/564x/79/fd/56/79fd5654942d543e7018ea5a7b65a208.jpg" },
  { src: "https://i.pinimg.com/564x/35/53/5d/35535dc8dd468e631f4de37bea8cdfdc.jpg" },
  { src: "https://i.pinimg.com/564x/3e/2a/2a/3e2a2a7f7653a28716e0208a7d3fc3a2.jpg" },
  { src: "https://i.pinimg.com/564x/81/67/1b/81671b15bc23180bb57e83de5f8d9996.jpg" },
  { src: "https://i.pinimg.com/564x/81/67/1b/81671b15bc23180bb57e83de5f8d9996.jpg" },
]

class GalleryPage extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center bb bw1 b--black-05 pt2 pb4-ns pb2 mb6-ns mb3 relative">
          <h1 className="f1 f-headline-l lh-solid mb1 athelas fw9">Portfolio</h1>
        </div>

        <div className="mw9 center relative">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {elements.map(item => (
              <div key={item.src} className="mb3">
                <Item className="db w-100" src={item.src} alt="Melissa Calamia" />
              </div>
            ))}
          </Masonry>

          <Style>{`
            .my-masonry-grid {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              margin-left: -15px;
              width: auto;
            }
            .my-masonry-grid_column {
              padding-left: 15px;
              background-clip: padding-box;
            }
          `}</Style>

        </div>
      </div>
    );
  }
}

const Item = styled.img`
  transition: all 0.2s ease-in-out;
`

export default GalleryPage;
