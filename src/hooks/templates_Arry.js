import { BsCloudUpload, BsImage, BsGrid, BsPlugFill, BsCameraVideo, } from 'react-icons/bs'
import { MdOutlineMessage, MdLocalMovies } from 'react-icons/md'
import { FiLayers, FiEdit, FiMoreHorizontal } from 'react-icons/fi'
import { IoShapesOutline } from 'react-icons/io5'
import { HiMusicalNote } from 'react-icons/hi2'
import { RxLoop } from 'react-icons/rx'
import { BiHelpCircle } from 'react-icons/bi'
import Main_Top_Section from '../component/side-multiple-components/Main_Top_Section'
import Layers from '../component/side-multiple-components/Layers'
import Subtitle from '../component/side-multiple-components/Subtitle'
import Videos from '../component/side-multiple-components/Videos'
import Image from '../component/side-multiple-components/Image'
import Elements from '../component/side-multiple-components/Elements'
import Audio from '../component/side-multiple-components/Audio'
import Transitions from '../component/side-multiple-components/Transitions'
import Templates from '../component/side-multiple-components/Templates'
import Plugins from '../component/side-multiple-components/Plugins'
import More from '../component/side-multiple-components/More'
import Help from '../component/side-multiple-components/Help'
import Media from '../component/side-multiple-components/Media'
import Record from '../component/side-multiple-components/Record'
import Title from '../component/side-multiple-components/Title'
import {FaHome,FaSearch,FaSave,FaBell} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RxAvatar,RxHamburgerMenu} from 'react-icons/rx';


const templates = [
    {
        title: 'Media',
        icon: <BsCloudUpload />,
        ref: 'media',
        component: <Media />
    },
    {
        title: 'Layers',
        icon: <FiLayers />,
        ref: 'layers',
        component: <Layers />
    },
    {
        title: 'Title',
        icon: <FiEdit />,
        ref: 'title',
        component: <Title />

    },
    {
        title: 'Subtitle',
        icon: <MdOutlineMessage />,
        ref: 'subtitle',
        component: <Subtitle />

    },
    {
        title: 'Videos',
        icon: <MdLocalMovies />,
        ref: 'videos',
        component: <Videos />

    },
    {
        title: 'Images',
        icon: <BsImage />,
        ref: 'images',
        component: <Image />

    },
    {
        title: 'Elements',
        icon: <IoShapesOutline />,
        ref: 'elements',
        component: <Elements />

    },
    {
        title: 'Audio',
        icon: <HiMusicalNote />,
        ref: 'audio',
        component: <Audio />


    },
    {
        title: 'Transitions',
        icon: <RxLoop />,
        ref: '',
        component: <Transitions />

    },
    {
        title: 'Templates',
        icon: <BsGrid />,
        ref: '',
        component: <Transitions />

    },
    {
        title: 'Plugins',
        icon: <BsPlugFill />,
        ref: '',
        component: <Plugins />

    },
    {
        title: 'Record',
        icon: <BsCameraVideo />,
        ref: '',
        component: <Record />

    },
    {
        title: 'More',
        icon: <FiMoreHorizontal />,
        ref: '',
        component: <More />

    },
    {
        title: 'Help',
        icon: <BiHelpCircle />,
        ref: '',
        component: <Help />

    },
]
export const sideData = [

    {

        name: 'Home',
        icon: <FaHome size={25} color='white' />,
        ref: 'Home'
    },
    {
        name: 'Search',
        icon: <FaSearch size={25} color='white' />,
        ref: 'Search'
    },
    {
        name: 'Save',
        icon: <FaSave size={25} color='white' />,
        ref: 'Save'
    },
    {
        name: 'Bell',
        icon: <FaBell size={25} color='white' />,
        ref: 'Bell'
    },
    {
        name: 'Email',
        icon: <MdEmail size={25} color='white' />,
        ref: 'Email'
    },
    {
        name: 'Profile',
        icon: <RxAvatar size={25} color='white' />,
        ref: 'Profile'
    },
    {
        name: 'More',
        icon: <RxHamburgerMenu size={25} color='white' />,
        ref: 'More'
    },
]

export { templates }