import React, { useState } from 'react';
import { PageContent } from '../../components/layouts/PageContent';
import { TbMountain } from 'react-icons/tb';
import { FiSquare } from 'react-icons/fi';

import { ReactComponent as Restrict } from '../../assets/svg/restrict.svg';
// import {ReactComponent as ExampleSVG} from '../../assets/svg/Example_svg.svg';
import SvgComponent from '../../components/svg/GroupSVG';
import SvgButton from '../../components/svg/SvgButton';
import ExampleSVG from '../../components/svg/ExampleSVG';

const Skills = () => {
    const [color, setColor] = useState('');

    return (
        <PageContent>
            <button
                className="bg-sky-900 p-6 rounded-3xl
                hover:shadow-[0_0_20px]
                hover:shadow-purple-600
                hover:border-purple-600 border-2
                border-gray-400
                hover:text-white
                text-gray-400
                transition-all
                mr-3"
            >
                <TbMountain size="24" />
            </button>

            <button
                className=" bg-green-400 p-6 rounded-3xl
                border-green-400 border-2
                hover:text-white
                text-black
                mr-3"
            >
                <TbMountain size="24" />
            </button>

            <button
                className=" bg-purple-600 p-6 rounded-3xl
                border-purple-600 border-2
                hover:text-white
                text-white
                mr-3"
            >
                <FiSquare size="24" />
            </button>

            <button
                className=" bg-none

                mr-3"
                onMouseOver={() => setColor('red')}
                onMouseLeave={() => setColor('blue')}
            >
                <Restrict fill={color} width="44" height="44" />
            </button>
            <button
                className=" bg-none

                mr-3"
                onMouseOver={() => setColor('red')}
                onMouseLeave={() => setColor('blue')}
            >
                <SvgComponent fill={color} />
            </button>
            {/*<button*/}
            {/*    className=" bg-none*/}
            {/*    text-cyan-900*/}
            {/*    mr-3"*/}
            {/*    onMouseOver={() => setColor('red')}*/}
            {/*    onMouseLeave={() => setColor('blue')}*/}
            {/*>*/}
            {/*    <SvgButton fill={color} />*/}
            {/*</button>*/}
            <button
                className=" bg-none
                text-cyan-900
                mr-3"
                onMouseOver={() => setColor('red')}
                onMouseLeave={() => setColor('blue')}
            >
                <ExampleSVG fill={color} color={'green'} />
            </button>
        </PageContent>
    );
};

export default Skills;
