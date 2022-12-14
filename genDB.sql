USE [QLNH]
GO
/****** Object:  Table [dbo].[MonAn]    Script Date: 10/15/2022 9:33:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MonAn](
	[MaMonAn] [int] IDENTITY(1,1) NOT NULL,
	[TenMonAn] [nvarchar](500) NULL,
	[ThucDon] [nvarchar](500) NULL,
	[NgayTao] [date] NULL,
	[AnhMonAn] [nvarchar](500) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NguoiDung]    Script Date: 10/15/2022 9:33:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NguoiDung](
	[TenDangNhap] [varchar](50) NULL,
	[MatKhau] [varchar](50) NULL,
	[HoVaTen] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThucDon]    Script Date: 10/15/2022 9:33:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThucDon](
	[MaThucDon] [int] IDENTITY(1,1) NOT NULL,
	[TenThucDon] [nvarchar](50) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[MonAn] ON 

INSERT [dbo].[MonAn] ([MaMonAn], [TenMonAn], [ThucDon], [NgayTao], [AnhMonAn]) VALUES (1, N'Súp mùa xuân', N'Món chính', CAST(N'2022-01-09' AS Date), N'SupMuaXuan.jpg')
INSERT [dbo].[MonAn] ([MaMonAn], [TenMonAn], [ThucDon], [NgayTao], [AnhMonAn]) VALUES (6, N'Gà', N'Món chính', CAST(N'2022-05-12' AS Date), N'GaBBQ.jpg')
INSERT [dbo].[MonAn] ([MaMonAn], [TenMonAn], [ThucDon], [NgayTao], [AnhMonAn]) VALUES (7, N'Gà', N'Món chính', CAST(N'2022-05-12' AS Date), N'GaBBQ.jpg')
SET IDENTITY_INSERT [dbo].[MonAn] OFF
GO
INSERT [dbo].[NguoiDung] ([TenDangNhap], [MatKhau], [HoVaTen]) VALUES (N'hanquanhanh', N'hanquanhanh', N'Hàn Quá Nhanh')
INSERT [dbo].[NguoiDung] ([TenDangNhap], [MatKhau], [HoVaTen]) VALUES (N'admin', N'admin', N'Admin')
GO
SET IDENTITY_INSERT [dbo].[ThucDon] ON 

INSERT [dbo].[ThucDon] ([MaThucDon], [TenThucDon]) VALUES (1, N'Món khai vị (món nhẹ)')
INSERT [dbo].[ThucDon] ([MaThucDon], [TenThucDon]) VALUES (2, N'Món chính.')
INSERT [dbo].[ThucDon] ([MaThucDon], [TenThucDon]) VALUES (3, N'Món tráng miệng')
INSERT [dbo].[ThucDon] ([MaThucDon], [TenThucDon]) VALUES (1013, N'Nước')
INSERT [dbo].[ThucDon] ([MaThucDon], [TenThucDon]) VALUES (1014, N'Món theo mùa')
SET IDENTITY_INSERT [dbo].[ThucDon] OFF
GO
