import { Fragment } from "react";
import React from "react";
import ProfileCard from "../component/ProfileCard";
import members from "../data/data"; // Import data dari data.js

export default function Profile() {
    return (
        <>
        <p id="movies">Anggota Kelompok 36</p>
        {members.map((member, index) => (
            <Fragment key={member.id}>
            <ProfileCard
                nama={member.nama}
                genre={member.genre}
                imageUrl={member.imageUrl}
                onClick={() => alert("Ini orang namanya " + member.nama)}
            />
            {members.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
    );
}