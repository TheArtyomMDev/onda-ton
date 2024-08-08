import {compile, NetworkProvider, UIProvider} from '@ton/blueprint';
import Onda from "../tests/NativePool/contract";
import {address} from "@ton/core";
import {Cell} from "@ton/core";

export async function run(provider: NetworkProvider) {
    let contract = Onda.createForDeploy(
        await compile("NativePool"),
        address(
            "0QDIHoTtFWW5Rz6zYTSDJ7juwRxWk_xjjsKRUtvxPir2Uo9x"
        ),
        address(
            "0QDIHoTtFWW5Rz6zYTSDJ7juwRxWk_xjjsKRUtvxPir2Uo9x"
        ),
        address(
            "0QDIHoTtFWW5Rz6zYTSDJ7juwRxWk_xjjsKRUtvxPir2Uo9x"
        ),
        address(
            "0QDIHoTtFWW5Rz6zYTSDJ7juwRxWk_xjjsKRUtvxPir2Uo9x"
        ),
        address(
            "0QDIHoTtFWW5Rz6zYTSDJ7juwRxWk_xjjsKRUtvxPir2Uo9x"
        ),
        Cell.EMPTY
    )

    const openedContract = provider.open(contract);
    openedContract.sendDeploy(provider.sender());

    await provider.waitForDeploy(contract.address);
}
