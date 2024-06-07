import Header from "@/components/Header";
import { Metadata } from "next";
import type {Stories } from "@/features/StoryRow";
import StoryRow from "@/features/StoryRow";
import alice from "@/public/ux/alice/MeetAlice.png";
import aliceAppStore from "@/public/ux/alice/AppStore.png";
import aliceOnboarding from "@/public/ux/alice/Onboarding.png";
import alicePaymentCode from "@/public/ux/alice/PaymentCode.png";
import aliceSharing from "@/public/ux/alice/ShareTray.png";
import aliceTipSign from "@/public/ux/alice/TipSign.png";
import brijesh from "@/public/ux/brijesh/MeetBrijesh-full.png";
import charlotte from "@/public/ux/charlotte/MeetCharlotte-full.png";
import danh from "@/public/ux/danh/MeetDanh-full.png";
import elaheh from "@/public/ux/elaheh/MeetElaheh-full.png";

export const metadata:Metadata = {
  title: "UX Design | BOLT 12",
  description: "UX ideas for integrating BOLT 12 into your bitcoin lightning application."
}

const stories:Stories = {
    alice: [
        {
            image: alice,
            alt: "Alice playing a keyboard",
            caption: "Alice is a musician and wants a way to receive tips from the audience when her band is playing live shows."
        },
        {
            image: aliceAppStore,
            alt: "Bitcoin wallet in an app store",
            caption: "Alice downloads a bitcoin wallet from the app store."
        },
        {
            image: aliceOnboarding,
            alt: "Wallet Onboarding Flow",
            caption: "Alice onboards to the wallet."
        },
        {
            image: alicePaymentCode,
            alt: "A UI where Alice can retrieve her payment code, a BIP21 URI with a BOLT 12 offer.",
            caption: "Alices retrieves her payment code, which is a BIP21 URI with a BOLT 12 offer."
        },
        {
            image: aliceSharing,
            alt: "UI of opening the share tray on iOS",
            caption: "Once she has her payment code, she can share it with her audience."
        },
        {
            image: aliceTipSign,
            alt: "A tip sign with a QR code of Alice's BOLT 12 offer",
            caption: "Alice slaps this payment code (Offer QR) on a sign at her band’s merch booth and in front of the mic so audience can tip them directly."
        }
    ],
    brijesh: [
        {
            image: brijesh,
            alt: "",
            caption: "Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats!"
        }
    ],
    charlotte: [
        {
            image: charlotte,
            alt: "",
            caption: "Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats!"
        }
    ],
    danh: [
        {
            image: danh,
            alt: "",
            caption: "Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats!"
        }
    ],
    elaheh: [
        {
            image: elaheh,
            alt: "",
            caption: "Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats!"
        }
    ]
}

export default function UxDesign(){
    return(
        <>
            <Header />

            <div className="flex flex-col gap-8 p-8 pt-36 mx-auto">
                <h1 className="font-bold">User Stories</h1>
                <section className="py-12 border-b border-t border-gray-200 flex flex-col gap-6">
                    <h2 id="reusable-payment-requests">Reusable Payment Requests</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.alice} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="receiver-privacy">Receiver Privacy</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.brijesh} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="social-integration">Social Integration</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.charlotte} />
                </section>
                <section className="py-12 border-b border-gray-200 flex flex-col gap-6">
                    <h2 id="auto-withdrawals">Auto-withdrawals</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.danh} />
                </section>
                <section className="py-12 border-b-0 border-gray-200 flex flex-col gap-6">
                    <h2 id="censorship-resistance">Censorship Resistance</h2>
                    <p>
                        Bitcoin ipsum dolor sit amet. Mempool, public key cryptocurrency address, Bitcoin Improvement Proposal proof-of-work nonce, sats! Sats, public key private key wallet hashrate sats block height wallet timestamp server. Hashrate transaction mempool mining inputs whitepaper, bitcoin.
                    </p>
                    <StoryRow story={stories.elaheh} />
                </section>
            </div>
        </>
    )
}