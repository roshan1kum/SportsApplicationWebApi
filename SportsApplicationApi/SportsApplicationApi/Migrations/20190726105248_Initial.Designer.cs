﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using SportsApplicationApi.Models;
using System;

namespace SportsApplicationApi.Migrations
{
    [DbContext(typeof(SportsApplicationApiContext))]
    [Migration("20190726105248_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SportsApplication.Models.Details", b =>
                {
                    b.Property<int>("TestResultId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Distance");

                    b.Property<string>("FitnessRating");

                    b.Property<string>("Name");

                    b.Property<int>("TestId");

                    b.HasKey("TestResultId");

                    b.ToTable("Details");
                });

            modelBuilder.Entity("SportsApplication.Models.test", b =>
                {
                    b.Property<int>("TestId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Date");

                    b.Property<int>("number_participants");

                    b.Property<string>("test_type");

                    b.HasKey("TestId");

                    b.ToTable("test");
                });
#pragma warning restore 612, 618
        }
    }
}
