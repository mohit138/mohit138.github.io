import React from 'react'

const SkillBlock = ({ fontSize = 20, children, renderForMobile = false }) => {
    if (!renderForMobile) {
        return (
            <div
                className="text-white transition duration-300 text-center hover:text-slate-300 mt-6"
                style={{
                    fontSize: `${fontSize}px`,
                }}
            >
                {children}
            </div>
        )
    } else {
        return (
        <div
            className="text-white transition duration-300 text-center hover:text-slate-300 text-2xl mt-4"
        >
            {children}
        </div>);
    }

}

export default SkillBlock;