// assets
import {
    AppstoreAddOutlined,
    PushpinOutlined,
    UserOutlined,
    LoadingOutlined,
    HddFilled,
    UsergroupAddOutlined,
    ToolOutlined
} from '@ant-design/icons';

// icons
const icons = {
    UserOutlined,
    PushpinOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    HddFilled,
    UsergroupAddOutlined,
    ToolOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-join-request',
            title: 'Joining Requests',
            type: 'item',
            url: '/joining-requests',
            icon: icons.UsergroupAddOutlined
        },
        {
            id: 'util-services',
            title: 'Services',
            type: 'item',
            url: '/services',
            icon: icons.HddFilled
        },
        {
            id: 'util-captines',
            title: 'Captines',
            type: 'item',
            url: '/captains',
            icon: icons.UserOutlined
        },
        {
            id: 'util-workshops',
            title: 'Workshops',
            type: 'item',
            url: '/workshops',
            icon: icons.ToolOutlined
        },
        {
            id: 'ant-sections',
            title: 'Sections',
            type: 'item',
            url: '/sections',
            icon: icons.PushpinOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
