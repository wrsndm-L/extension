import { IBridgeFeeCost } from "@block-wallet/background/utils/bridgeApi"
import { formatUnits } from "@ethersproject/units"
import React from "react"
import { formatRounded } from "../../util/formatRounded"
import FeeItem from "./FeeItem"

const FeeTokenSummaryDisplay = ({
    feeDetail,
    expandable = true,
}: {
    feeDetail: IBridgeFeeCost
    expandable?: boolean
}) => {
    return (
        <div>
            <span className="text-xs text-primary-grey-dark font-semibold">
                {formatRounded(
                    formatUnits(feeDetail.total, feeDetail.token.decimals),
                    4
                )}{" "}
                {feeDetail.token.symbol}
            </span>
            <ul className="pl-1 pt-1 flex space-y-2 flex-col">
                {feeDetail.details?.map((fee) => {
                    return (
                        <React.Fragment key={fee.name}>
                            <FeeItem
                                detail={fee}
                                token={feeDetail.token}
                                expandable={!!fee.description}
                            />
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )
}

export default FeeTokenSummaryDisplay
