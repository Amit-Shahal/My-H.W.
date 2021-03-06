USE [Cafeteria]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 19/01/2021 23:52:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Name] [nvarchar](30) NULL,
	[SerialNumber] [char](9) NOT NULL,
	[Price] [float] NULL,
	[Cost] [float] NULL,
	[Inventory] [int] NULL,
	[SupplierId] [int] NULL,
	[row_version] [timestamp] NULL,
PRIMARY KEY CLUSTERED 
(
	[SerialNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Purchase]    Script Date: 19/01/2021 23:52:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Purchase](
	[StudentId] [int] NULL,
	[SerialNumber] [char](9) NULL,
	[Date] [datetime] NULL,
	[Amount] [int] NULL,
	[PurchaseId] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PurchaseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 19/01/2021 23:52:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[StudentId] [int] NOT NULL,
	[Name] [nvarchar](30) NOT NULL,
	[IsActive] [bit] NULL,
	[AvgGrade] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[StudentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Supplier]    Script Date: 19/01/2021 23:52:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supplier](
	[Name] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[SupplierId] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'ספרייט', N'11468    ', 5.5, 2.75, 2, 2)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'קוקה קולה', N'12668    ', 6, 3, 21, 6)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'nestea', N'14602    ', 5, 2.5, 14, 1)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'פסק זמן', N'24290    ', 4.5, 2.25, 1, 7)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'במבה', N'25037    ', 8, 4, 27, 4)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'מרשמלו', N'43678    ', 6, 3, 1, 7)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'שוקולד פרה', N'56536    ', 7, 3.5, 6, 2)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'אגוזי', N'65931    ', 4, 2, 17, 5)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'כיפכיף', N'69668    ', 4, 2, 20, 7)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'אפרופו', N'80872    ', 6, 3, 1, 3)
INSERT [dbo].[Product] ([Name], [SerialNumber], [Price], [Cost], [Inventory], [SupplierId]) VALUES (N'ביסלי', N'88976    ', 6.5, 3.25, 28, 1)
SET IDENTITY_INSERT [dbo].[Purchase] ON 

INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (189, N'69668    ', CAST(N'2017-01-06T00:00:00.000' AS DateTime), 1, 1)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (294, N'65931    ', CAST(N'2017-05-15T00:00:00.000' AS DateTime), 1, 2)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (189, N'88976    ', CAST(N'2017-05-11T00:00:00.000' AS DateTime), 3, 3)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (837, N'69668    ', CAST(N'2017-07-19T00:00:00.000' AS DateTime), 4, 4)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (317, N'88976    ', CAST(N'2017-03-13T00:00:00.000' AS DateTime), 4, 5)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (770, N'12668    ', CAST(N'2017-06-11T00:00:00.000' AS DateTime), 1, 6)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (412, N'12668    ', CAST(N'2017-04-18T00:00:00.000' AS DateTime), 1, 7)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (412, N'69668    ', CAST(N'2017-01-24T00:00:00.000' AS DateTime), 2, 8)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (803, N'12668    ', CAST(N'2017-06-30T00:00:00.000' AS DateTime), 5, 9)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (803, N'12668    ', CAST(N'2017-04-09T00:00:00.000' AS DateTime), 2, 10)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (912, N'65931    ', CAST(N'2017-06-15T00:00:00.000' AS DateTime), 4, 11)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (548, N'24290    ', CAST(N'2017-05-22T00:00:00.000' AS DateTime), 5, 12)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (620, N'69668    ', CAST(N'2017-01-22T00:00:00.000' AS DateTime), 4, 14)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (770, N'80872    ', CAST(N'2017-03-16T00:00:00.000' AS DateTime), 1, 15)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (803, N'14602    ', CAST(N'2017-06-19T00:00:00.000' AS DateTime), 2, 16)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (912, N'43678    ', CAST(N'2017-07-04T00:00:00.000' AS DateTime), 4, 17)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (489, N'14602    ', CAST(N'2017-05-28T00:00:00.000' AS DateTime), 3, 18)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (507, N'14602    ', CAST(N'2017-02-28T00:00:00.000' AS DateTime), 2, 19)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (635, N'12668    ', CAST(N'2017-03-14T00:00:00.000' AS DateTime), 4, 20)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (508, N'25037    ', CAST(N'2017-03-05T00:00:00.000' AS DateTime), 4, 21)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (227, N'25037    ', CAST(N'2017-03-17T00:00:00.000' AS DateTime), 5, 22)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (227, N'56536    ', CAST(N'2017-03-21T00:00:00.000' AS DateTime), 3, 23)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (264, N'11468    ', CAST(N'2017-02-01T00:00:00.000' AS DateTime), 1, 24)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (447, N'14602    ', CAST(N'2017-07-23T00:00:00.000' AS DateTime), 5, 25)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (548, N'69668    ', CAST(N'2017-04-14T00:00:00.000' AS DateTime), 3, 26)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (508, N'56536    ', CAST(N'2017-03-20T00:00:00.000' AS DateTime), 2, 27)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (548, N'14602    ', CAST(N'2017-05-05T00:00:00.000' AS DateTime), 1, 28)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (189, N'14602    ', CAST(N'2017-05-20T00:00:00.000' AS DateTime), 2, 29)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (551, N'24290    ', CAST(N'2017-01-16T00:00:00.000' AS DateTime), 2, 30)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (156, N'12668    ', CAST(N'2019-09-16T11:15:51.840' AS DateTime), 1, 62)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (156, N'12668    ', CAST(N'2019-09-16T11:15:52.323' AS DateTime), 1, 63)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (156, N'12668    ', CAST(N'2019-09-16T11:16:28.413' AS DateTime), 1, 64)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (255, N'11468    ', CAST(N'2021-01-19T23:25:21.757' AS DateTime), 3, 80)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (255, N'12668    ', CAST(N'2021-01-19T23:25:21.760' AS DateTime), 1, 81)
INSERT [dbo].[Purchase] ([StudentId], [SerialNumber], [Date], [Amount], [PurchaseId]) VALUES (255, N'12668    ', CAST(N'2021-01-19T23:39:04.167' AS DateTime), 1, 82)
SET IDENTITY_INSERT [dbo].[Purchase] OFF
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (156, N'Yosi', 1, 88)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (171, N'Hagai', 1, 71)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (189, N'Dani', 1, 74)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (227, N'Maayan', 0, 72)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (255, N'Gadi', 1, 51)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (264, N'Benny', 1, 97)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (294, N'Moshe', 1, 51)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (302, N'Roi', 1, 90)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (306, N'Shani', 1, 97)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (317, N'amit', 1, 15)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (365, N'Reut', 1, 77)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (402, N'Naor', 1, 83)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (412, N'Golan', 1, 70)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (447, N'Dani', 1, 79)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (489, N'Dana', 1, 86)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (507, N'Dikla', 1, 61)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (508, N'Sivan', 1, 86)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (528, N'Sharon', 1, 80)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (548, N'Shira', 0, 61)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (551, N'Avishai', 1, 87)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (593, N'Adi', 1, 61)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (620, N'Yaron', 1, 53)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (635, N'Rachel', 0, 50)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (702, N'Yoav', 1, 71)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (748, N'Rami', 1, 55)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (770, N'Ofer', 1, 71)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (803, N'Alon', 1, 76)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (837, N'Shir', 0, 73)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (912, N'Haim', 1, 97)
INSERT [dbo].[Student] ([StudentId], [Name], [IsActive], [AvgGrade]) VALUES (916, N'Meirav', 1, 81)
SET IDENTITY_INSERT [dbo].[Supplier] ON 

INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'רמי לוי', N'04-85493', 1)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'שופרסל', N'03-54982', 2)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'יינות ביתן', N'03-87945', 3)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'מגה', N'09-77954', 4)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'טמפו', N'08-53176', 5)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'אושר עד', N'03-96554', 6)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'טיב טעם', N'04-46137', 7)
INSERT [dbo].[Supplier] ([Name], [Phone], [SupplierId]) VALUES (N'ארתור', N'000', 8)
SET IDENTITY_INSERT [dbo].[Supplier] OFF
ALTER TABLE [dbo].[Purchase] ADD  DEFAULT (getdate()) FOR [Date]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD FOREIGN KEY([SupplierId])
REFERENCES [dbo].[Supplier] ([SupplierId])
GO
ALTER TABLE [dbo].[Purchase]  WITH CHECK ADD FOREIGN KEY([SerialNumber])
REFERENCES [dbo].[Product] ([SerialNumber])
GO
ALTER TABLE [dbo].[Purchase]  WITH CHECK ADD FOREIGN KEY([StudentId])
REFERENCES [dbo].[Student] ([StudentId])
GO
