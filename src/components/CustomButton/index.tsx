import { IButtonProps } from "../../types/index"

const CustomButton = ({
    title,
    designs,
    handleClick,
    isDisabled,
    btnType,
    rIcon
}: IButtonProps) => {
    return (
        <button
            type={btnType || "button"}
            disabled={isDisabled}
            onClick={handleClick}
            className={`custom-btn ${designs} bg-primary-blue rounded-full text-white transition hover:bg-blue-900`}>
            
            <span className="flex-1">{title}</span>

            {rIcon && (
            <div className="relative w-7 h-7">
                <img src={rIcon}/>
            </div>
            )}
        </button>
    )
}

export default CustomButton;